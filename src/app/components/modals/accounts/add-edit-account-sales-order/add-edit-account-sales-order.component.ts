import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/services/accounts.service';
import { AdministrationService } from 'src/app/shared/services/administration.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-add-edit-account-sales-order',
    templateUrl: './add-edit-account-sales-order.component.html',
    styleUrls: ['./add-edit-account-sales-order.component.css']
})
export class AddEditAccountSalesOrderComponent implements OnInit {
    @Input() type = 'add';
    @Input() salesOrder;
    @Output() response: EventEmitter<any> = new EventEmitter();
    orders = [];
    selectedOrders = [];
    searchParams = {
        search: ''
    };
    employees = [];
    newSalesOrder = {
        work_orders: this.selectedOrders,
        delivery_note: '',
        month: '',
        user_id: null
    }
    selectedOrder = '';
    orderInput: boolean = false;
    employeeInput: boolean = false;
    selectedEmployee = '';
    searchSubscription: Subscription;
    currentDate = new Date();
    selectedDate;
    constructor(private helper: GlobalHelper, private _account: AccountService, private _administration: AdministrationService, private datePipe: DatePipe) {
    }

    ngOnInit(): void {
        this.getOrders();
        this.getEmployees();
        if (this.type == 'edit') {
            this.mapUpdateObj()
        }

    }

    mapUpdateObj() {
        this.selectedDate = new Date(this.salesOrder.month);
        this.selectedOrder = this.salesOrder.work_order.work_number;
    }


    getEmployees(event = null) {
        let search = '';
        if (event) {
            search = event.target.value;
        }
        if (search.length >= 3 || search.length == 0) {
            if (this.searchSubscription) this.searchSubscription.unsubscribe();
            this._account.usersListing({ search: search }).subscribe(res => {
                this.employees = res.data.data;
                this.newSalesOrder.user_id = res.data.data[0] ? res.data.data[0]?.id : null;
                this.selectedEmployee = this.employees.find(x => x.id == this.salesOrder.user_id).name
            });
        }
    }
    selectOrder(order) {
        if (this.type == 'edit') {
            this.selectedOrder = order.work_number;
            this.salesOrder.work_order_id = order.id;
            return;
        }
        if (this.selectedOrders.find(x => x.id == order.id)) {
            return;
        }
        this.selectedOrders.push({
            work_order_id: order.id,
            number: order.work_number,
            model: order
        })
    }

    selectEmployee(employee) {
        this.selectedEmployee = employee.name;
        this.newSalesOrder.user_id = employee.id;
    }

    searchOrder(event) {
        let search = '';
        if (event) {
            search = event.target.value;
        }
        if (search.length >= 3 || search.length == 0) {
            if (this.searchSubscription) this.searchSubscription.unsubscribe();
            this.searchSubscription = this._account.salesOrdersRodListing({ search: search }).subscribe(res => {
                this.orders = res.data.data;
            })
        }

    }

    checkSelectedOrder(order) {
        if (this.selectedOrders.find(x => x.work_order_id == order.id)) {
            return true;
        } else return false;
    }

    getOrders(event = null) {
        let search = event ? event.term : '';
        this._account.salesOrdersRodListing(this.searchParams).subscribe(res => {
            this.orders = res.data.data;
        });
    }
    cancel() {
        this.response.emit({ success: false });
    }

    addOrder() {
        this._account.addSalesOrder(this.newSalesOrder).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true });
        })
    }

    updateOrder() {
        console.log(this.salesOrder)
        this._account.updateSaleOrder(this.salesOrder).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        })
    }

    removeOrder(index) {
        this.selectedOrders.splice(index, 1);
    }

    orderInputOut() {
        setTimeout(() => {
            this.orderInput = false
        }, 100);
    }
    employeeInputOut() {
        setTimeout(() => {
            this.employeeInput = false
        }, 100);
    }

    monthValue(event) {
        this.newSalesOrder.month = this.datePipe.transform(event, 'MMMM, YYYY');
        this.salesOrder.month = this.datePipe.transform(event, 'MMMM, YYYY');
    }

}

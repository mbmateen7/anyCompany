import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/services/accounts.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { PhonebookService } from 'src/app/shared/services/phonebook.service';
import { RodService } from 'src/app/shared/services/rod.service';

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
        employee_id: null
    }
    orderInput: boolean = false;
    employeeInput: boolean = false;
    selectedEmployee = '';
    searchSubscription: Subscription;
    currentDate = new Date();
    constructor(private helper: GlobalHelper, private _account: AccountService, private _phonebook: PhonebookService, private datePipe: DatePipe) {
    }

    ngOnInit(): void {
        this.getOrders();
        this.getEmployees();
    }


    getEmployees(event = null) {
        let search = '';
        if (event) {
            search = event.target.value;
        }
        if (search.length >= 3 || search.length == 0) {
            if (this.searchSubscription) this.searchSubscription.unsubscribe();
            this._phonebook.employeesListing({ search: search }).subscribe(res => {
                this.employees = res.data.data;
                this.newSalesOrder.employee_id = res.data.data[0] ? res.data.data[0]?.id : null;
            });
        }
    }
    selectOrder(order) {
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
        this.newSalesOrder.employee_id = employee.id;
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
        // 
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
        console.log(this.newSalesOrder);
    }

}

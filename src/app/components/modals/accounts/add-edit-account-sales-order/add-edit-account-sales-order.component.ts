import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
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
        total_delivered: '',
        employee_id: null
    }
    constructor(private selectConfig: NgSelectConfig, private helper: GlobalHelper, private _account: AccountService, private _phonebook: PhonebookService) {
        selectConfig.notFoundText = 'Start typing...';
    }

    ngOnInit(): void {
        this.getOrders();
        this.getEmployees();
    }


    getEmployees(event = null) {
        let search = event ? event.term : '';
        this._phonebook.employeesListing({ search: search }).subscribe(res => {
            this.employees = res.data.data;
            this.newSalesOrder.employee_id = res.data.data[0] ? res.data.data[0]?.id : null;
        })
    }
    selectOrder(order) {
        console.log(order);
        if (this.selectedOrders.find(x => x.id == order.id)) {
            return;
        }
        this.selectedOrders.push({
            work_order_id: order.id,
            number: order.work_number,
            model: order
        })
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

}

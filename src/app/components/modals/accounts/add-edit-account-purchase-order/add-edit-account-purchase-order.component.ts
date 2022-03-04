import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/shared/services/accounts.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { PhonebookService } from 'src/app/shared/services/phonebook.service';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-add-edit-account-purchase-order',
    templateUrl: './add-edit-account-purchase-order.component.html',
    styleUrls: ['./add-edit-account-purchase-order.component.css']
})
export class AddEditAccountPurchaseOrderComponent implements OnInit {
    @Input() type = 'add';
    @Input() salesOrder;
    @Output() response: EventEmitter<any> = new EventEmitter();
    newPurchaseOrder = {
        order_number: '',
        value: '',
        supplier_id: '',
        work_order_id: '',
        due_date: '',
        type: '',
        note: ''
    }
    orders = [];
    suppliers = [];
    constructor(private _rod: RodService, private _phonebook: PhonebookService, private helper: GlobalHelper, private _account: AccountService) { }

    ngOnInit(): void {
        this.getOrders();
        this.getSuppliers();
    }

    getSuppliers(event = null) {
        let search = event ? event.term : '';
        this._phonebook.supplierListing({ search: search }).subscribe(res => {
            this.suppliers = res.data.data;
            this.newPurchaseOrder.supplier_id = res.data.data[0] ? res.data.data[0]?.id : null;
        })
    }

    getOrders(event = null) {
        let search = event ? event.term : '';
        this._rod.rodListing({ search: search }).subscribe(res => {
            this.orders = res.data.data;
            this.newPurchaseOrder.work_order_id = res.data.data[0] ? res.data.data[0]?.id : null;
        });
    }
    cancel() {
        this.response.emit({ success: false });
    }

    addOrder() {
        console.log(this.newPurchaseOrder);
        this._account.addPurchaseOrder(this.newPurchaseOrder).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true });
        })
    }

    updateOrder() {
        // 
    }
}
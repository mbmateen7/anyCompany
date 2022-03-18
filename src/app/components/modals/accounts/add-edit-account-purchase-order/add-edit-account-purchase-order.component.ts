import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
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
        note: ''
    }
    orders = [];
    suppliers = [];
    selectedSupplier = '';
    supplierInput: boolean = false;
    searchSubscription: Subscription;
    orderInput: boolean = false;
    selectedOrder = '';
    currentDate = new Date();
    selectedDate;
    constructor(private _rod: RodService, private _phonebook: PhonebookService, private helper: GlobalHelper, private _account: AccountService, private datePipe: DatePipe) { }

    ngOnInit(): void {
        console.log(this.type);
        this.getOrders();
        this.getSuppliers();
        if (this.type == 'edit') {
            this.updateOrderObj()
        }
    }
    updateOrderObj() {
        this.selectedDate = new Date(this.salesOrder.due_date);
        this.selectedOrder = this.salesOrder.order.work_number
    }

    getSuppliers(event = null) {
        let search = '';
        if (event) {
            search = event.target.value;
        }
        if (search.length >= 3 || search.length == 0) {
            if (this.searchSubscription) this.searchSubscription.unsubscribe();
            this._phonebook.supplierListing({ search: search }).subscribe(res => {
                this.suppliers = res.data.data;
                this.newPurchaseOrder.supplier_id = res.data.data[0] ? res.data.data[0]?.id : null;
                this.selectedSupplier = this.suppliers.find(x => x.id == this.salesOrder.supplier_id).name;
            })
        }
    }

    getOrders(event = null) {
        let search = '';
        if (event) {
            search = event.target.value;
        }
        if (search.length >= 3 || search.length == 0) {
            if (this.searchSubscription) this.searchSubscription.unsubscribe();
            this._rod.rodListing({ search: search }).subscribe(res => {
                this.orders = res.data.data;
                this.newPurchaseOrder.work_order_id = res.data.data[0] ? res.data.data[0]?.id : null;
            });
        }
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
        this._account.updatePurchaseOrder(this.salesOrder).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        })
    }

    selectSupplier(supplier) {
        this.selectedSupplier = supplier.name;
        this.newPurchaseOrder.supplier_id = supplier.id;
        this.salesOrder.supplier_id = supplier.id;
    }

    selectOrder(order) {
        this.selectedOrder = order.work_number;
        this.newPurchaseOrder.work_order_id = order.id;
        this.salesOrder.work_order_id = order.id;
    }

    supplierInputOut() {
        setTimeout(() => {
            this.supplierInput = false
        }, 100);
    }

    orderInputOut() {
        setTimeout(() => {
            this.orderInput = false
        }, 100);
    }

    dateValue(event) {
        this.newPurchaseOrder.due_date = this.datePipe.transform(event, 'YYYY-MM-dd');
        this.salesOrder.due_date = this.datePipe.transform(event, 'YYYY-MM-dd');
    }

}
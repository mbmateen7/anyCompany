import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { FscService } from 'src/app/shared/services/fsc.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { PhonebookService } from 'src/app/shared/services/phonebook.service';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-add-edit-purchase-orders',
    templateUrl: './add-edit-purchase-orders.component.html',
    styleUrls: ['./add-edit-purchase-orders.component.css']
})
export class AddEditPurchaseOrdersComponent implements OnInit {
    @Input() order;
    @Input() type;
    @Output() response: EventEmitter<any> = new EventEmitter();
    currentDate: string = '';
    fscType: string = 'Order';
    newOrder = {
        type: 'Order',
        date: '',
        order_number: null,
        work_order_id: null,
        product_type: '',
        fsc_claim: '',
        quantity: '',
        invoice_value: '',
        supplier_id: undefined,
        material: '',
        schedule_ref: ''
    }
    workOrders = [];
    suppliers = [];
    constructor(private datePipe: DatePipe, private _helper: GlobalHelper, private _fsc: FscService, private _rod: RodService, private selectConfig: NgSelectConfig, private _phonebook: PhonebookService) {
        selectConfig.notFoundText = 'Start typing...';
    }


    ngOnInit(): void {
        this.setCurrentDate();
        this.getWorkOrders();
        this.getSuppliers();
    }

    getWorkOrders(event = null) {
        let search = event ? event.term : '';
        this._rod.rodListing({ search: search }).subscribe(res => {
            this.workOrders = res.data.data;
            this.newOrder.work_order_id = res.data.data[0]?.id;
        });
    }

    getSuppliers(event = null) {
        let search = event ? event.term : '';
        this._phonebook.supplierListing({ search: search }).subscribe(res => {
            this.suppliers = res.data.data;
            this.newOrder.supplier_id = this.suppliers[0]?.id
        });
    }


    logOrder() {
        console.log(this.newOrder);

    }

    setCurrentDate() {
        this.currentDate = this.newOrder.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.currentDate);
    }

    addPurchaseOrder() {
        if (!this.validateOrder()) {
            return;
        }
        this._fsc.addPurchaseOrder(this.newOrder).subscribe(res => {
            this._helper.toastSuccess(res.message);
            this.response.emit({ success: true });
        })
    }

    close() {
        this.response.emit({ success: false });
    }

    updatePuchaseOrder() {
        if (!this.validateUpdateOrder()) {
            return;
        }
        this._fsc.updateOrder(this.order).subscribe(res => {
            this._helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        })
    }


    validateOrder() {
        if (!this.newOrder.date) {
            this._helper.toastError('Please select date');
            return false;
        }

        if (this.newOrder.type == 'Order') {
            if (!this.newOrder.work_order_id) {
                this._helper.toastError('Please enter order number');
                return false;
            }

        }
        if (this.newOrder.type == 'Stock') {
            if (!this.newOrder.supplier_id) {
                this._helper.toastError('Please select supplier');
                return false;
            }

            if (!this.newOrder.order_number) {
                this._helper.toastError('Please enter order_number');
                return false;
            }
        }
        if (!this.newOrder.product_type) {
            this._helper.toastError('Please select product type');
            return false;
        }
        if (!this.newOrder.quantity) {
            this._helper.toastError('Please enter quantity');
            return false;
        }
        if (!this.newOrder.fsc_claim) {
            this._helper.toastError('please select FSC Claim');
            return false;
        }
        if (!this.newOrder.invoice_value) {
            this._helper.toastError('Please enter invoice value');
            return false;
        }
        if (!this.newOrder.material) {
            this._helper.toastError('Please select material');
            return false;
        }
        return true;
    }

    validateUpdateOrder() {
        if (!this.order.date) {
            this._helper.toastError('Please select date');
            return false;
        }

        if (this.order.type == 'Order') {
            if (!this.order.work_order_id) {
                this._helper.toastError('Please enter order number');
                return false;
            }

        }
        if (this.order.type == 'Stock') {
            if (!this.order.supplier_id) {
                this._helper.toastError('Please select supplier');
                return false;
            }

            if (!this.order.order_number) {
                this._helper.toastError('Please enter order_number');
                return false;
            }
        }
        if (!this.order.product_type) {
            this._helper.toastError('Please select product type');
            return false;
        }
        if (!this.order.quantity) {
            this._helper.toastError('Please enter quantity');
            return false;
        }
        if (!this.order.fsc_claim) {
            this._helper.toastError('please select FSC Claim');
            return false;
        }
        if (!this.order.invoice_value) {
            this._helper.toastError('Please enter invoice value');
            return false;
        }
        if (!this.order.material) {
            this._helper.toastError('Please select material');
            return false;
        }
        return true;
    }

    deletePurchaseOrder() {
        this._fsc.deleteOrder({ id: this.order.id }).subscribe(res => {
            this._helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        })
    }
}

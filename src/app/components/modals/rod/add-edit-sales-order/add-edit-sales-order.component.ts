import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { PhonebookService } from 'src/app/shared/services/phonebook.service';
import { RodService } from 'src/app/shared/services/rod.service';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';

@Component({
    selector: 'app-add-edit-sales-order',
    templateUrl: './add-edit-sales-order.component.html',
    styleUrls: ['./add-edit-sales-order.component.css']
})
export class AddEditSalesOrderComponent implements OnInit {
    @Output() response: EventEmitter<any> = new EventEmitter();
    @Input() order: any;
    @Input() type: any;
    products: any = [];
    selectedProducts = [];
    customers = [];
    workOrder = {
        products: this.selectedProducts,
        customer_id: 0,
        location: '',
        contract: '',
        fsc: false,
        order_number: '',
    }
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    updateOrder: any;
    currentDate = '';
    constructor(private _rod: RodService, private helper: GlobalHelper, private _modal: NgbModal, private _phonebook: PhonebookService) { }

    ngOnInit(): void {
        this.updateOrderObj();
        this.getProductsListing();
        this.getCustomerListing();
    }

    updateOrderObj() {
        console.log(this.order);
        this.updateOrder = {
            id: this.order?.id,
            work_number: this.order?.work_number,
            invoice_no: this.order?.invoice_no,
            schedule_ref: this.order?.schedule_ref,
            status: this.order?.status,
            quantity: this.order?.quantity,
            product_id: this.order?.product_id,
            customer_id: this.order?.customer_id,
            location: this.order?.location,
            contract: this.order?.contract,
            fsc: this.order?.fsc,
            order_number: this.order?.order_number,
            due_date: this.order?.due_date
        }
    }

    getProductsListing() {
        this._rod.productsListing().subscribe((res: any) => {
            this.products = res.data
        })
    }

    getCustomerListing() {
        this._phonebook.customerListing().subscribe((res: any) => {
            this.customers = res.data.data
        })
    }

    cancel() {
        this.response.emit({ success: false });
    }

    addSalesOrder() {
        console.log(this.workOrder)
        if (this.validateAddForm()) {
            this._rod.storeWorkOrder(this.workOrder).subscribe(res => {
                this.helper.toastSuccess(res.message);
                this.response.emit({ success: true });
            })
        }
    }

    updateSalesOrder() {
        console.log(this.workOrder)
        if (this.validateUpdateForm()) {
            this._rod.updateWorkOrder(this.updateOrder).subscribe(res => {
                this.helper.toastSuccess(res.message);
                this.response.emit({ success: true, data: res.data });
            })
        }
    }

    selectProduct(event: any,) {
        let p = this.products[event.target.value];
        event.target.value = 'select';
        if (!this.selectedProducts.find((x: any) => x.id == p.id)) {
            this.selectedProducts.push({
                id: p.id,
                name: p.name,
                quantity: 0
            });
        }
    }
    removeProduct(index: number) {
        this.selectedProducts.splice(index, 1);
        console.log(this.selectedProducts, index);
    }

    selectCustomer(event) {
        if (event.target.value == 'new') {
            const modal = this._modal.open(AddEditCustomerComponent, this.modalConfig)
            modal.componentInstance.response.subscribe(res => {
                console.log(res);
                if (res.success) {
                    this.customers.push(res.data)
                    this.workOrder.customer_id = res.data.id;
                }
                modal.dismiss();
            })
        }
    }

    validateAddForm() {
        if (!this.workOrder.products.length) {
            this.helper.toastError('Please select product');
            return false;
        }
        if (!this.workOrder.customer_id) {
            this.helper.toastError('Please select customer');
            return false;
        }
        let quantityProduct = this.workOrder.products.find(x => x.quantity == 0);
        if (quantityProduct) {
            this.helper.toastError('Please enter quantity for ' + quantityProduct.name);
            return false;
        }
        if (!this.workOrder.contract.length) {
            this.helper.toastError('Please enter contract details');
            return false;
        }
        if (!this.workOrder.order_number.length) {
            this.helper.toastError('Please enter customer order number');
            return false;
        }
        if (!this.workOrder.location.length) {
            this.helper.toastError('Please enter location');
            return false;
        }
        return true;
    }

    validateUpdateForm() {
        if (!this.updateOrder.product_id) {
            this.helper.toastError('Please select product');
            return false;
        }
        if (!this.updateOrder.quantity) {
            this.helper.toastError('Please enter product quantity');
            return false;
        }
        if (!this.updateOrder.contract.length) {
            this.helper.toastError('Please enter contract details');
            return false;
        }
        if (!this.updateOrder.order_number.length) {
            this.helper.toastError('Please enter customer order number');
            return false;
        }
        if (!this.updateOrder.location.length) {
            this.helper.toastError('Please enter location');
            return false;
        }
        return true;
    }


}

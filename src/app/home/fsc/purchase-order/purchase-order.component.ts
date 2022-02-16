import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddEditPurchaseOrdersComponent } from 'src/app/components/modals/fsc/add-edit-purchase-orders/add-edit-purchase-orders.component';
import { FscService } from 'src/app/shared/services/fsc.service';

@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    purchaseOrders = [];
    searchParams = {
        search: '',
        start_date: '',
        end_date: ''
    }
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    searchSubscription: Subscription;
    constructor(private _fsc: FscService, private _modal: NgbModal) { }

    ngOnInit(): void {
        this.getPurchaseListing();
    }

    getPurchaseListing() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        this.searchSubscription = this._fsc.purchaseOrderListing(this.searchParams).subscribe(res => {
            this.purchaseOrders = res.data.data;
        });
    }

    searchPurchaseOrders() {
        if (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3) {
            this.getPurchaseListing();
        }
    }

    editPurchaseOrder(p, i) {
        this.modalConfig.windowClass = "modal-roles modal-FSC-Order"
        const modal = this._modal.open(AddEditPurchaseOrdersComponent, this.modalConfig);
        modal.componentInstance.type = 'edit';
        modal.componentInstance.order = { ...p };
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.purchaseOrders[i] = res.data;
            }
            modal.dismiss();
            this.modalConfig.windowClass = "modal-roles";
        })
    }

    addPurchaseOrder() {
        this.modalConfig.windowClass = "modal-roles modal-FSC-Order"
        const modal = this._modal.open(AddEditPurchaseOrdersComponent, this.modalConfig);
        modal.componentInstance.type = 'add';
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.getPurchaseListing();
            }
            modal.dismiss();
            this.modalConfig.windowClass = "modal-roles";
        })
    }

    deletePurchaseOrder(purchase, index) {
        this.modalConfig.windowClass = "modal-roles modal-FSC-Order"
        const modal = this._modal.open(AddEditPurchaseOrdersComponent, this.modalConfig);
        modal.componentInstance.order = { ...purchase };
        modal.componentInstance.type = 'delete';
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.purchaseOrders.splice(index, 1);
            }
            modal.dismiss();
            this.modalConfig.windowClass = "modal-roles";
        })
    }

}

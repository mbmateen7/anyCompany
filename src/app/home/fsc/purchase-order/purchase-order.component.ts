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
        end_date: '',
        page_size: 10,
        page: 1
    }
    totalPages: 1;
    pageFrom = 1;
    pageTo = 10;
    totalCount = 10;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    searchSubscription: Subscription;
    dateToday = new Date();
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
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        });
    }

    searchOrder(type) {
        if (type == 'search' && (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3)) {
            this.getPurchaseListing();
        }
        if (type == 'date' && this.searchParams.start_date && this.searchParams.end_date) {
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


    changePage(event) {
        this.searchParams.page = event;
        this.getPurchaseListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getPurchaseListing();
    }
}

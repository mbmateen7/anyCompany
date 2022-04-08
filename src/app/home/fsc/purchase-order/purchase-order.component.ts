import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddEditPurchaseOrdersComponent } from 'src/app/components/modals/fsc/add-edit-purchase-orders/add-edit-purchase-orders.component';
import { AuthService } from 'src/app/shared/services/auth.service';
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
        page: 1,
        sort_column: 'date',
        sort_value: 'DESC'
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
    startDate;
    endDate;
    constructor(private _fsc: FscService, private _modal: NgbModal, private datePipe: DatePipe, public _auth: AuthService) { }

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
        this.searchParams.page = 1;
        if (type == 'search' && (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3)) {
            this.getPurchaseListing();
        }
        setTimeout(() => {
            if (type == 'date' && ((this.startDate && this.endDate) || (!this.startDate && !this.endDate))) {
                this.searchParams.start_date = this.startDate ? this.datePipe.transform(this.startDate, 'YYYY-MM-dd') : null;
                this.searchParams.end_date = this.endDate ? this.datePipe.transform(this.endDate, 'YYYY-MM-dd') : null;
                this.getPurchaseListing();
            }
        }, 50);
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

    downloadData() {
        this._fsc.downloadPurchaseOrder(this.searchParams).subscribe(res => {
            window.open(res.data.link);
        })
    }

    sortData(column) {
        this.searchParams.sort_column = column;
        this.searchParams.sort_value = this.searchParams.sort_value == 'ASC' ? 'DESC' : 'ASC';
        console.log(this.searchParams);

        this.getPurchaseListing();
    }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditAccountPurchaseOrderComponent } from 'src/app/components/modals/accounts/add-edit-account-purchase-order/add-edit-account-purchase-order.component';
import { AddEditAccountSalesOrderComponent } from 'src/app/components/modals/accounts/add-edit-account-sales-order/add-edit-account-sales-order.component';
import { AddJobNotesComponent } from 'src/app/components/modals/rod/add-job-notes/add-job-notes.component';
import { AccountService } from 'src/app/shared/services/accounts.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
    account;
    customerTotals = [];
    salesOrder = [];
    purchaseOrders = [];
    dateToday = new Date();
    searchParams = {
        search: '',
        page_size: 10,
        page: 1
    }
    totalPages = 1;
    pageFrom = 1;
    pageTo = 10;
    totalCount = 10;
    activeTab = 'salesOrder';
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles Fixed-cost-modal"
    };
    constructor(private _account: AccountService, private _modal: NgbModal, private helper: GlobalHelper) { }

    ngOnInit(): void {
        this.getAccountStats()
        this.getListing();
    }

    getAccountStats() {
        this._account.accountStats().subscribe(res => {
            this.account = res.data;
        });
    }

    getCustomerTotalListing() {
        this._account.customerTotals(this.searchParams).subscribe(res => {
            this.customerTotals = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        });
    }

    getSalesOrderListing() {
        this._account.salesOrders(this.searchParams).subscribe(res => {
            this.salesOrder = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        });
    }

    getMontlyCostListing() {
        this._account.accountsPurchaseOrdersListing(this.searchParams).subscribe(res => {
            this.purchaseOrders = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        });
    }

    markChecked(purchase, index) {
        this._account.updatePurchaseOrder({ id: purchase.id }).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.purchaseOrders[index] = res.data;
        })
    }
    resetSearchParams() {
        this.searchParams = {
            search: '',
            page_size: 10,
            page: 1
        }
        this.totalPages = 1
    }

    changeTab(tab: string) {
        this.activeTab = tab;
        this.resetSearchParams();
        this.getListing();
    }

    getListing() {
        if (this.activeTab == 'salesOrder') {
            this.getSalesOrderListing();
        } else if (this.activeTab == 'monthlyCost') {
            this.getMontlyCostListing()
        } else if (this.activeTab == 'customerTotal') {
            this.getCustomerTotalListing();
        }
    }

    searchOrder() {
        if (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3) {
            this.getListing();
        }
    }

    changePage(event) {
        this.searchParams.page = event;
        this.getListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getListing();
    }


    addSalesOrder() {
        const salesModal = this._modal.open(AddEditAccountSalesOrderComponent, this.modalConfig);
        salesModal.componentInstance.type = 'add';
        salesModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.getListing();
            }
            salesModal.dismiss();
        });

    }

    editSalesOrder(order, index) {
        const salesModal = this._modal.open(AddEditAccountSalesOrderComponent, this.modalConfig);
        salesModal.componentInstance.type = 'edit';
        salesModal.componentInstance.order = order;
        salesModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.salesOrder[index] = res.data;
            }
            salesModal.dismiss();
        });

    }

    addPurchaseOrder() {
        const purchaseModal = this._modal.open(AddEditAccountPurchaseOrderComponent, this.modalConfig);
        purchaseModal.componentInstance.type = 'add';
        purchaseModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.getListing();
            }
            purchaseModal.dismiss();
        });

    }

    editPurchaseOrder(order, index) {
        const purchaseModal = this._modal.open(AddEditAccountPurchaseOrderComponent, this.modalConfig);
        purchaseModal.componentInstance.type = 'edit';
        purchaseModal.componentInstance.order = order;
        purchaseModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.purchaseOrders[index] = res.data;
            }
            purchaseModal.dismiss();
        });

    }

    addJobNote(orderId, index) {
        this.modalConfig.windowClass = "modal-roles job-notes-modal"
        const jobNoteModal = this._modal.open(AddJobNotesComponent, this.modalConfig);
        jobNoteModal.componentInstance.orderId = orderId
        jobNoteModal.componentInstance.response.subscribe(res => {
            if (res.close) {
                this.getSalesOrderListing();
                jobNoteModal.dismiss();
                this.modalConfig.windowClass = "modal-roles"
            }
        });
    }

    updateSaleStatus(id, index) {
        this._account.updateSaleOrder({ id: id }).subscribe(res => {
            this.salesOrder[index] = res.data;
            this.helper.toastSuccess(res.message);
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditFixedCostComponent } from 'src/app/components/modals/accounts/add-edit-fixed-cost/add-edit-fixed-cost.component';
import { DeleteConfirmationComponent } from 'src/app/components/modals/rod/delete-confirmation/delete-confirmation.component';
import { AccountService } from 'src/app/shared/services/accounts.service';

@Component({
    selector: 'app-fixed-cost',
    templateUrl: './fixed-cost.component.html',
    styleUrls: ['./fixed-cost.component.css']
})
export class FixedCostComponent implements OnInit {
    costs = [];
    dateToday = new Date();
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles Fixed-cost-modal"
    };
    searchParams = {
        search: '',
        page_size: 10,
        page: 1
    }
    totalPages = 1;
    pageFrom = 1;
    pageTo = 10;
    totalCount = 10;
    constructor(private _modal: NgbModal, private _account: AccountService) { }

    ngOnInit(): void {
        this.getFixedCosts();
    }

    getFixedCosts() {
        this._account.fixedCostListing(this.searchParams).subscribe(res => {
            this.costs = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        })
    }

    addFixedCost() {
        const fixedCostModal = this._modal.open(AddEditFixedCostComponent, this.modalConfig);
        fixedCostModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.getFixedCosts()
            }
            fixedCostModal.dismiss();
        })
    }
    editFixedCost(cost, index) {
        let copy = JSON.parse(JSON.stringify(cost));
        const fixedCostUpdateModal = this._modal.open(AddEditFixedCostComponent, this.modalConfig);
        fixedCostUpdateModal.componentInstance.type = 'edit';
        fixedCostUpdateModal.componentInstance.fixedCost = copy;
        fixedCostUpdateModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                console.log(res);
                this.costs[index] = res.data;
            }
            fixedCostUpdateModal.dismiss();
        })
    }

    deleteFixedCost(cost, index) {

        const fixedCostDeleteModal = this._modal.open(DeleteConfirmationComponent, this.modalConfig);
        fixedCostDeleteModal.componentInstance.type = 'fixedCost';
        fixedCostDeleteModal.componentInstance.data = { ...cost };
        fixedCostDeleteModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.costs.splice(index, 1);
            }
            fixedCostDeleteModal.dismiss();
        })
    }



    changePage(event) {
        this.searchParams.page = event;
        this.getFixedCosts();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getFixedCosts();
    }

}

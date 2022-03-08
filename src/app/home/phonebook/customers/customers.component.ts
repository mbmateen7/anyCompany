import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddEditCustomerComponent } from 'src/app/components/modals/rod/add-edit-customer/add-edit-customer.component';
import { DeleteConfirmationComponent } from 'src/app/components/modals/rod/delete-confirmation/delete-confirmation.component';
import { PhonebookService } from "../../../shared/services/phonebook.service";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers = [];
    searchParams = {
        search: '',
        page_size: 10,
        page: 1
    }
    totalPages = 1;
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
    constructor(private _phonebook: PhonebookService, private _modal: NgbModal) { }

    ngOnInit(): void {
        this.getCustomerListing();
    }

    getCustomerListing() {
        if (this.searchSubscription) this.searchSubscription.unsubscribe();
        this.searchSubscription = this._phonebook.customerListing(this.searchParams).subscribe((res: any) => {
            this.customers = res.data.data
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        })
    }

    searchCustomers() {
        if (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3) {
            this.getCustomerListing();
        }
    }
    changePage(event) {
        this.searchParams.page = event;
        this.getCustomerListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getCustomerListing();
    }

    addCustomer() {
        const modal = this._modal.open(AddEditCustomerComponent, this.modalConfig)
        modal.componentInstance.response.subscribe(res => {
            console.log(res);
            if (res.success) {
                this.getCustomerListing();
            }
            modal.dismiss();
        })
    }

    editCustomer(customer, index) {
        const modal = this._modal.open(AddEditCustomerComponent, this.modalConfig)
        modal.componentInstance.cus = { ...customer };
        modal.componentInstance.type = 'edit';
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.customers[index] = res.data;
            }
            modal.dismiss();
        })
    }

    deleteCustomer(customer, index) {
        const modal = this._modal.open(DeleteConfirmationComponent, this.modalConfig)
        modal.componentInstance.data = { ...customer };
        modal.componentInstance.type = 'customer';
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.customers.splice(index, 1);
            }
            modal.dismiss();
        })
    }
}

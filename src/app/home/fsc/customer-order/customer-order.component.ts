import { Component, OnInit } from '@angular/core';
import { FscService } from 'src/app/shared/services/fsc.service';

@Component({
    selector: 'app-customer-order',
    templateUrl: './customer-order.component.html',
    styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
    searchParams = {
        search: '',
        page_size: 10,
        page: 1
    }
    totalPages: 1;
    fscList = [];
    dateToday = new Date();
    constructor(private _fsc: FscService) { }

    ngOnInit(): void {
        this.getFscListing();
    }

    getFscListing() {
        this._fsc.listing(this.searchParams).subscribe(res => {
            this.fscList = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page;
        })
    }

    changePage(event) {
        this.searchParams.page = event;
        this.getFscListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getFscListing();
    }

}

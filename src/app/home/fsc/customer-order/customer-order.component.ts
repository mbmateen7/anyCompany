import { Component, OnInit } from '@angular/core';
import { FscService } from 'src/app/shared/services/fsc.service';

@Component({
    selector: 'app-customer-order',
    templateUrl: './customer-order.component.html',
    styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
    searchParams = {
        search: ''
    }
    fscList = [];
    constructor(private _fsc: FscService) { }

    ngOnInit(): void {
        this.getFscListing();
    }

    getFscListing() {
        this._fsc.listing(this.searchParams).subscribe(res => {
            this.fscList = res.data.data;
        })
    }

}

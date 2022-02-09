import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-update-delivery-order',
    templateUrl: './update-delivery-order.component.html',
    styleUrls: ['./update-delivery-order.component.css']
})
export class UpdateDeliveryOrderComponent implements OnInit {
    @Input() order;
    @Output() response: EventEmitter<any> = new EventEmitter();
    products = [];
    constructor(private _rod: RodService) { }

    ngOnInit(): void {
        this.getProductsListing();
    }

    getProductsListing() {
        this._rod.productsListing().subscribe(res => {
            this.products = res.data;
        })
    }

    close() {
        this.response.emit({ success: false });
    }

    updateOrder() {
        console.log(this.order);
        this._rod.updateWorkOrder(this.order).subscribe(res => {
            this.response.emit({ success: true, data: res.data })
        });
    }
}

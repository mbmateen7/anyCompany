import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-view-credit-check-details',
    templateUrl: './view-credit-check-details.component.html',
    styleUrls: ['./view-credit-check-details.component.css']
})
export class ViewCreditCheckDetailsComponent implements OnInit {
    @Input() credits = [];
    @Output() response: EventEmitter<any> = new EventEmitter();
    total = 0;
    constructor() { }

    ngOnInit(): void {
        this.calculateTotal();
    }

    calculateTotal() {
        this.credits.forEach(element => {
            if (element.checked) {
                this.total += Number(element.sale_order.value);
            }
        });
    }

    close() {
        this.response.emit({ success: true });
    }

}

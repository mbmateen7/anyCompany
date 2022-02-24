import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-add-edit-account-sales-order',
    templateUrl: './add-edit-account-sales-order.component.html',
    styleUrls: ['./add-edit-account-sales-order.component.css']
})
export class AddEditAccountSalesOrderComponent implements OnInit {
    @Input() type = 'add';
    @Input() order;
    @Output() response: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }


    cancel() {
        this.response.emit({ success: false });
    }

    addOrder() {
        // 
    }

    updateOrder() {
        // 
    }

}

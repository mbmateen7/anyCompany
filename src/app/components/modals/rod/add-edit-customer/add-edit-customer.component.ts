import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhonebookService } from 'src/app/shared/services/phonebook.service';

@Component({
    selector: 'app-add-edit-customer',
    templateUrl: './add-edit-customer.component.html',
    styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {
    @Output() response: EventEmitter<any> = new EventEmitter();
    customer = {
        name: '',
        email: '',
        phone_no: ''
    }
    constructor(private _phonebook: PhonebookService) { }

    ngOnInit(): void {
    }

    cancel() {
        this.response.emit({ success: false });
    }

    new() {
        console.log(this.customer)
        this._phonebook.addCustomer(this.customer).subscribe(res => {
            console.log(res);
            this.response.emit({ success: true, data: res.data, new: true })
        })
    }

}

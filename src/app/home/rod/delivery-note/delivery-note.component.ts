import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateInvoiceScheduleRefComponent } from 'src/app/components/modals/rod/update-invoice-schedule-ref/update-invoice-schedule-ref.component';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-delivery-note',
    templateUrl: './delivery-note.component.html',
    styleUrls: ['./delivery-note.component.css']
})
export class DeliveryNoteComponent implements OnInit {
    workOrder: any;
    customerOrders = [];
    deliveryNotes = [];
    currentDeliveryNote: any;
    deliveryOrder = {
        invoice_to: '',
        ticket_no: '',
        dispatch_date: '',
        fsc: false,
        order_number: '',
        properties: {
            flush_door: '',
            frames: '',
            linings: '',
            stops: '',
            architraves: '',
            timber_sections: '',
            hinges: '',
            glass_pcs: '',
            glazing_beads: '',
            hinge_packers: '',
            intu_strip_10_4: '',
            intu_smoke_10_4: '',
            intu_strip_15_4: '',
            intu_smoke_15_4: '',
            intu_strip_20_4: '',
            intu_smoke_20_4: '',
            drop_down_seals: '',
            weather_seals: ''
        },
        work_orders: [],
        site_contact: '',
        site_number: '',
        other_notes: ''
    }
    currentDate;
    constructor(private _rod: RodService, private helper: GlobalHelper, private route: ActivatedRoute, private datePipe: DatePipe) {
        this.route.params.subscribe(res => {
            this.getWorkOrder(res.id);
            this.getDeliveryNotes(res.id);
        })

        this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }

    getWorkOrder(id) {
        this._rod.getWorkOrder({ id: id }).subscribe(res => {
            this.workOrder = res.data;
            this.deliveryOrder.order_number = res.data.order_number
            this.deliveryOrder.work_orders.push({
                id: res.data.id,
                work_number: res.data.work_number
            })
            this._rod.getCustomerNumberOrders({ order_number: res.data.order_number }).subscribe(res => {
                this.customerOrders = res.data;
            })
        });
    }

    getDeliveryNotes(id) {
        this._rod.getDeliveryNotes({ work_order_id: id }).subscribe(res => {
            this.deliveryNotes = res.data;
        })
    }


    ngOnInit(): void {
    }

    addDeliveryNote() {
        console.log(this.deliveryOrder);
        this._rod.addDevliveryNote(this.deliveryOrder).subscribe(res => {
            this.resetFormValue();
            this.getDeliveryNotes(this.workOrder.id);
        });
    }

    removeOrder(index) {
        this.deliveryOrder.work_orders.splice(index, 1);
    }

    addWorkOrder(order) {
        this.deliveryOrder.work_orders.push(order);
    }

    selectWorkOrder(event) {
        if (event.target.value != 'select') {
            this.deliveryOrder.work_orders.push(this.customerOrders[event.target.value]);
        }
        event.target.value = 'select';
    }

    checkSelectedOrder(id) {
        if (this.deliveryOrder.work_orders.find(x => x.id == id)) {
            return true;
        }
        return false;
    }

    resetFormValue() {
        this.deliveryOrder = {
            invoice_to: '',
            ticket_no: '',
            dispatch_date: '',
            fsc: false,
            order_number: this.workOrder.order_number,
            properties: {
                flush_door: '',
                frames: '',
                linings: '',
                stops: '',
                architraves: '',
                timber_sections: '',
                hinges: '',
                glass_pcs: '',
                glazing_beads: '',
                hinge_packers: '',
                intu_strip_10_4: '',
                intu_smoke_10_4: '',
                intu_strip_15_4: '',
                intu_smoke_15_4: '',
                intu_strip_20_4: '',
                intu_smoke_20_4: '',
                drop_down_seals: '',
                weather_seals: ''
            },
            work_orders: [{
                id: this.workOrder.id,
                work_number: this.workOrder.work_number
            }],
            site_contact: '',
            site_number: '',
            other_notes: ''
        }
        this.currentDeliveryNote = null;
    }

    updateDeliveryNote() {
        this._rod.updateDeliveryNote(this.deliveryOrder).subscribe(res => {
            this.helper.toastSuccess(res.message);
        });
    }

}

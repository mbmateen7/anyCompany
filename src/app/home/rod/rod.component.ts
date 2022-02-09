import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditSalesOrderComponent } from 'src/app/components/modals/rod/add-edit-sales-order/add-edit-sales-order.component';
import { AddJobNotesComponent } from 'src/app/components/modals/rod/add-job-notes/add-job-notes.component';
import { DeleteConfirmationComponent } from 'src/app/components/modals/rod/delete-confirmation/delete-confirmation.component';
import { TimelineComponent } from 'src/app/components/modals/rod/timeline/timeline.component';
import { UpdateInvoiceScheduleRefComponent } from 'src/app/components/modals/rod/update-invoice-schedule-ref/update-invoice-schedule-ref.component';
import { UpdateStatusComponent } from 'src/app/components/modals/rod/update-status/update-status.component';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-rod',
    templateUrl: './rod.component.html',
    styleUrls: ['./rod.component.css']
})
export class RodComponent implements OnInit {

    rods: any = [];
    search: string = '';
    checked: boolean = false;
    checkAll: boolean = false;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    multiUpdateType: string = 'invoice_no';
    constructor(private _rod: RodService, private helper: GlobalHelper, private _modal: NgbModal, private router: Router) { }

    ngOnInit(): void {
        this.rodListing();
    }

    rodListing() {
        this._rod.rodListing(this.search).subscribe(res => {
            this.rods = res.data.data.map(rod => {
                rod.edit_invoice = false;
                rod.edit_schedule_ref = false;
                return rod;
            });
        });
    }

    selectOptions() {
        this.checked = this.rods.find((x: any) => x.checked) ? true : false
        this.checkAll = this.rods.find((x: any) => !x.checked) ? false : true
    }

    selectAll() {
        console.log(this.checkAll, this.rods.find((x: any) => !x.checked))
        if (this.checkAll) {
            this.rods.map((x: any) => x.checked = true)
        } else {
            this.rods.map((x: any) => x.checked = false)
        }
        this.checkAll = this.rods.find((x: any) => !x.checked) ? false : true
        this.selectOptions();
    }

    addSalesOrder() {
        const salesModal = this._modal.open(AddEditSalesOrderComponent, this.modalConfig);
        salesModal.componentInstance.type = 'add';
        salesModal.componentInstance.response.subscribe((res: any) => {
            if (res.success) {
                this.rodListing();
            }
            salesModal.close();
        });
    }

    editSalesOrder(order, index) {
        const salesModal = this._modal.open(AddEditSalesOrderComponent, this.modalConfig);
        salesModal.componentInstance.type = 'edit';
        salesModal.componentInstance.order = order;
        salesModal.componentInstance.response.subscribe((res: any) => {
            if (res.success) {
                this.rods[index] = res.data;
            }
            salesModal.close();
        });
    }


    addJobNote(orderId, index) {
        this.modalConfig.windowClass = "modal-roles job-notes-modal"
        const jobNoteModal = this._modal.open(AddJobNotesComponent, this.modalConfig);
        jobNoteModal.componentInstance.orderId = orderId
        jobNoteModal.componentInstance.response.subscribe(res => {
            if (res.success && !res.close) {
                this.rods[index] = res.data;
            }
            if (res.close) {
                this.rodListing();
                jobNoteModal.dismiss();
                this.modalConfig.windowClass = "modal-roles"
            }
        });
    }

    editInvoiceNo(index) {
        this.rods[index].edit_invoice = true;
        setTimeout(function () {
            document.getElementById('edit-invoice-no-' + index).focus();
        }, 20);
    }


    editScheduleRef(index) {
        this.rods[index].edit_schedule_ref = true;
        setTimeout(function () {
            document.getElementById('edit-schedule-ref-' + index).focus();
        }, 20);
    }

    updateInvoiceNo(event, index) {
        if (event.type == 'keyup' && event.keyCode != 13) {
            return;
        }
        if (!event.target.value || event.target.value == this.rods[index].invoice_no) {
            this.rods[index].edit_invoice = false
            return;
        }
        let obj = {
            id: [this.rods[index].id],
            type: 'invoice_no',
            data: event.target.value
        }
        this._rod.multipleUpdateOrder(obj).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.rods[index].edit_invoice = false
            this.rods[index].invoice_no = obj.data;
        });
    }

    updateScheduleRef(event, index) {
        if (event.type == 'keyup' && event.keyCode != 13) {
            return;
        }
        if (!event.target.value || event.target.value == this.rods[index].schedule_ref) {
            this.rods[index].edit_schedule_ref = false
            return;
        }
        let obj = {
            id: [this.rods[index].id],
            type: 'schedule_ref',
            data: event.target.value
        }
        this._rod.multipleUpdateOrder(obj).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.rods[index].edit_schedule_ref = false
            this.rods[index].schedule_ref = obj.data;
        });
    }
    multipleUpdate(type: string) {
        this.multiUpdateType = type;
        let ids = [];
        this.rods.forEach(rod => {
            if (rod.checked) {
                ids.push(rod.id);
            }
        });
        console.log(ids);
        let payload = {
            id: ids,
            type: this.multiUpdateType,
            data: '',
        }
        const modal = this._modal.open(UpdateInvoiceScheduleRefComponent, this.modalConfig);
        modal.componentInstance.type = this.multiUpdateType;
        modal.componentInstance.response.subscribe(response => {
            if (response.success) {
                payload.data = response.data;
                this._rod.multipleUpdateOrder(payload).subscribe(res => {
                    this.helper.toastSuccess(res.message);
                    this.rods.forEach(rod => {
                        if (ids.find(x => x == rod.id)) {
                            rod[this.multiUpdateType] = response.data;
                        }
                    });
                    modal.dismiss();
                });

            } else modal.dismiss();
        })
    }

    updateStatus(rod, event, index) {
        let modalData = {
            hold: rod.on_hold,
            from: rod.status,
            to: event.target.value,
            model: rod,
            status: event.target.value
        }
        this.modalConfig.windowClass = "modal-roles change-status-modal";
        const statusModal = this._modal.open(UpdateStatusComponent, this.modalConfig);
        statusModal.componentInstance.data = modalData;
        statusModal.componentInstance.response.subscribe(res => {
            event.target.value = res.data.status;
            this.rods[index] = res.data
            statusModal.dismiss();
            this.modalConfig.windowClass = "modal-roles"
        });
    }

    updateHoldStatus(rod) {
        let modalData = {
            hold: rod.on_hold ? false : true,
            from: rod.on_hold ? 'On Hold' : rod.status,
            to: rod.on_hold ? 'Off Hold' : 'On Hold',
            model: rod,
            status: rod.status
        }
        const statusModal = this._modal.open(UpdateStatusComponent, this.modalConfig);
        statusModal.componentInstance.data = modalData;
        statusModal.componentInstance.response.subscribe(res => {
            rod.on_hold = res.data.on_hold;
            statusModal.dismiss();
        });
    }

    deleteOrder(rod, i) {

        const statusModal = this._modal.open(DeleteConfirmationComponent, this.modalConfig);
        statusModal.componentInstance.data = rod;
        statusModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.rods.splice(i, 1);
            }
            statusModal.dismiss();
        });
    }

    viewTimeline(rod, index) {
        this.modalConfig.windowClass = 'modal-roles timeline';
        const timelineModal = this._modal.open(TimelineComponent, this.modalConfig);
        timelineModal.componentInstance.rod = rod;
        timelineModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.router.navigate(['rod/delivery-notes', rod.id]);
            }
            timelineModal.dismiss();
            this.modalConfig.windowClass = 'modal-roles';
        });

    }

    bulkStatusUpdate(event) {
        let data = {
            orders: this.rods.map(res => {
                if (res.checked)
                    return res.id;
            }),
            status: event.target.value
        }
        this._rod.bulkStatusUpdate(data).subscribe(res => {
            this.rodListing();
            event.target.value = 'select'
        })
    }
}

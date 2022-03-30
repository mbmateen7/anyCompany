import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RodService } from 'src/app/shared/services/rod.service';
import { ViewProductionScheduleComponent } from '../view-production-schedule/view-production-schedule.component';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
    @Input() rod;
    @Output() response: EventEmitter<any> = new EventEmitter();
    jobNotes = [];
    jobDetail = null;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    permissions;
    constructor(private _rod: RodService, private sanitizer: DomSanitizer, private _modal: NgbModal, private _auth: AuthService) {
        this.permissions = this._auth.currentUserPermissions;
        this._auth.userPermissionObjSubject.subscribe(res => {
            this.permissions = res;
        })
    }

    ngOnInit(): void {
        console.log(this.rod);
        this._rod.getTimeline({ work_order_id: this.rod.id, timeline: true }).subscribe(res => {
            this.jobNotes = res.data;
        });
    }

    close() {
        this.response.emit({ success: false, data: this.rod });
    }

    viewDeliveryNotes() {
        this.response.emit({ success: true });
    }

    safeHtml(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html)
    }

    viewProductionSchedule() {
        const productionModal = this._modal.open(ViewProductionScheduleComponent, this.modalConfig);
        productionModal.componentInstance.data = this.rod;
        productionModal.componentInstance.type = 'view';
        productionModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.rod = res.data
            }
            productionModal.dismiss();
        });
    }

    addProductionSchedule() {
        const productionModal = this._modal.open(ViewProductionScheduleComponent, this.modalConfig);
        productionModal.componentInstance.data = this.rod;
        productionModal.componentInstance.type = 'add';
        productionModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.rod = res.data;
            }
            productionModal.dismiss();
        });
    }
}   

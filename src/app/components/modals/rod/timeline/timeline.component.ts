import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    constructor(private _rod: RodService, private sanitizer: DomSanitizer, private _modal: NgbModal) { }

    ngOnInit(): void {
        this._rod.getTimeline({ work_order_id: this.rod.id, timeline: true }).subscribe(res => {
            this.jobNotes = res.data;
        });
    }

    close() {
        this.response.emit({ success: false });
    }

    viewDeliveryNotes() {
        this.response.emit({ success: true });
    }

    safeHtml(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html)
    }

    viewProductionSchedule() {
        const productionModal = this._modal.open(ViewProductionScheduleComponent, this.modalConfig);
        productionModal.componentInstance.data = this.rod.attachments;
        productionModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                // 
            }
            productionModal.dismiss();
        });
    }

}   

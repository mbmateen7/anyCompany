import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RodService } from 'src/app/shared/services/rod.service';

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
    constructor(private _rod: RodService) { }

    ngOnInit(): void {
        this._rod.getJobNotes({ work_order_id: this.rod.id }).subscribe(res => {
            this.jobNotes = res.data.data;
        });
    }

    close() {
        this.response.emit({ success: false });
    }

    viewDeliveryNotes() {
        this.response.emit({ success: true });
    }
}   

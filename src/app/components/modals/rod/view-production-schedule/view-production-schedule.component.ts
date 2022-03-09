import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-view-production-schedule',
    templateUrl: './view-production-schedule.component.html',
    styleUrls: ['./view-production-schedule.component.css']
})
export class ViewProductionScheduleComponent implements OnInit {
    @Input() data = [];
    @Output() response: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    cancel() {
        this.response.emit({ success: false });
    }
}

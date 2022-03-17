import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-view-production-schedule',
    templateUrl: './view-production-schedule.component.html',
    styleUrls: ['./view-production-schedule.component.css']
})
export class ViewProductionScheduleComponent implements OnInit {
    @Input() data;
    @Input() type = 'add';
    @Output() response: EventEmitter<any> = new EventEmitter();
    formData = new FormData();
    attachments = [];
    constructor(private _rod: RodService, private helper: GlobalHelper) { }

    ngOnInit(): void {
    }

    UploadFiles() {
        this.formData.set('work_order_id', this.data.id);
        this._rod.uploadProductionSchedule(this.formData).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        });
    }

    addAttachment(event) {
        for (let index = 0; index < event.target.files.length; index++) {
            const element = event.target.files[index];
            this.formData.append('attachment[]', element, element.name);
            if (this.attachments.find(x => x.name == element.name) == undefined) {
                this.attachments.push(element);
            }
        }
    }

    removeAttachment(index) {
        this.formData.delete('attachment[]');
        this.attachments.splice(index, 1);
        this.attachments.forEach(element => {
            this.formData.append('attachment[]', element, element.name);
        });
    }

    deleteAttachment(attach, index) {
        this._rod.removeProductionSchedule({ id: attach.id }).subscribe(res => {
            this.data.attachments.splice(index, 1);
            this.helper.toastSuccess(res.message);
        });
    }
    cancel() {
        this.response.emit({ success: false, data: this.data });
    }
}

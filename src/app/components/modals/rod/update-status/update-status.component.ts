import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdministrationService } from 'src/app/shared/services/administration.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-update-status',
    templateUrl: './update-status.component.html',
    styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
    @Input() data;
    @Input() rods = [];
    @Input() bulkStatus;
    @Input() type: string = 'single';
    @Output() response: EventEmitter<any> = new EventEmitter();
    notify = [];
    reason: string = '';
    notifyStatus = [
        'On Hold'
    ];
    attachmentStatus = [
        'To Factory'
    ];
    reasonStatus = [
        'On Hold'];
    dueDateStatus = [
        'To Factory'
    ];
    dueDate;
    formData = new FormData();
    attachmentName = '';
    constructor(private _rod: RodService, private helper: GlobalHelper, private _admin: AdministrationService, private datePipe: DatePipe) { }

    ngOnInit(): void {
        this.dueDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.getRoles();
    }

    getRoles() {
        if (this.notifyStatus.includes(this.data.to)) {
            this._admin.rolesListing().subscribe(res => {
                res.data.forEach(role => {
                    this.notify.push({
                        id: role.id,
                        name: role.title,
                        status: false
                    });
                });
            });
        }
    }
    cancel() {
        this.response.emit({ success: false, data: this.data.model[0] });
    }

    updateStatus() {
        this.formData.set('id', this.data.model[0].id);
        this.notify.forEach(element => {
            this.formData.set('notify[]', element);
        })
        this.formData.set('reason', this.reason);
        this.formData.set('on_hold', (this.data.hold ? '1' : '0'));
        this.formData.set('status', this.data.status);
        this.formData.set('due_date', this.dueDate);
        this._rod.updateOrderStatus(this.formData).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        });
    }

    addAttachment(event) {
        console.log(event.target.files)
        let file = event.target.files[0];
        this.formData.set('attachment', file, file.name);
        this.attachmentName = file.name;
    }

    removeAttachment() {
        this.attachmentName = '';
        this.formData.delete('attachment');
    }

    updateBulk() {
        this.formData.delete('id[]');
        this.data.model.forEach(element => {
            this.formData.append('id[]', element.id);
        })
        this.notify.forEach(element => {
            this.formData.set('notify[]', element);
        })
        this.formData.set('reason', this.reason);
        this.formData.set('on_hold', (this.data.hold ? '1' : '0'));
        this.formData.set('status', this.data.status);
        this.formData.set('due_date', this.dueDate);
        this._rod.bulkStatusUpdate(this.formData).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true });
        });
    }

}

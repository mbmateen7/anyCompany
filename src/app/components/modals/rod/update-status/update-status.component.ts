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
    @Input() type: string;
    @Output() response: EventEmitter<any> = new EventEmitter();
    notify = [];
    reason: string;
    constructor(private _rod: RodService, private helper: GlobalHelper, private _admin: AdministrationService) { }

    ngOnInit(): void {
        this._admin.rolesListing().subscribe(res => {
            res.data.forEach(role => {
                this.notify.push({
                    id: role.id,
                    name: role.title,
                    status: false
                });
            });
        })
    }

    cancel() {
        console.log(this.data.model)
        this.response.emit({ success: false, data: this.data.model });
    }

    updateStatus() {
        let obj = {
            id: this.data.model.id,
            notify: this.notify,
            reason: this.reason,
            on_hold: this.data.hold,
            status: this.data.status
        }
        this._rod.updateOrderStatus(obj).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.response.emit({ success: true, data: res.data });
        })
    }

}

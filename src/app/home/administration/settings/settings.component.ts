import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/shared/services/administration.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    settings: {
        blacklist_email_enabled: boolean,
        blacklist_email_recipients: Array<string>
    };
    constructor(private _administration: AdministrationService, public _auth: AuthService, private helper: GlobalHelper) { }

    ngOnInit(): void {

        this.getAdminSettings();
    }

    getAdminSettings() {
        this._administration.getSettings().subscribe(res => {
            this.settings = res.data;
        })
    }

    update() {
        this._administration.updateSettings(this.settings).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.settings = res.data
        });
    }

    addRecipient(event) {
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            this.settings.blacklist_email_recipients.push(event.target.value);
            event.target.value = '';
        }
    }

    removeRecipient(index) {
        this.settings.blacklist_email_recipients.splice(index, 1);
    }

}

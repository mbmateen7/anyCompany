import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    passwordObj = {
        old_password: '',
        password: '',
        password_confirmation: ''
    }
    updateUserObj = {
        name: '',
        email: ''
    }
    user: any;
    constructor(private helper: GlobalHelper, private _setting: SettingsService, private _auth: AuthService) {
        this.user = JSON.parse(localStorage.getItem('userObj'));
        this._auth.currentUser.subscribe(res => {
            if (res !== true) {
                this.user = res;
                this.updateUserObj.name = res.name;
                this.updateUserObj.email = res.email;
            }
        })
    }

    ngOnInit(): void {
    }

    updatePassword() {
        if (!this.validatePasswordObj()) {
            return;
        }
        this._setting.updatePassword(this.passwordObj).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this.passwordObj = {
                old_password: '',
                password: '',
                password_confirmation: ''
            }
        })
    }

    validatePasswordObj() {
        if (!this.passwordObj.old_password.length) {
            this.helper.toastError('Old Password is required');
            return false;
        }
        if (!this.passwordObj.password.length) {
            this.helper.toastError('New Password is required');
            return false;
        }
        if (!this.passwordObj.password_confirmation.length) {
            this.helper.toastError('Confirm Password is required');
            return false;
        }
        return true;
    }

    updateUser() {
        if (!this.validateUserObj()) {
            return;
        }
        this._setting.updateUser(this.updateUserObj).subscribe(res => {
            this.helper.toastSuccess(res.message);
            this._auth.updateUserData(res.data);
        });
    }

    validateUserObj() {
        if (!this.updateUserObj.email.length) {
            this.helper.toastError('Email is required');
            return false;
        }
        if (!this.updateUserObj.name.length) {
            this.helper.toastError('Name is required');
            return false;
        }
        return true;
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalHelper {


    constructor(private _toast: ToastrService) {
        // 
    }

    validateEmailAddress(email: any): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    clearLocalStorage() {
        localStorage.clear();
        return true;
    }

    toastSuccess(message: any): void {
        this._toast.success('', message);
    }
    toastError(message: any): void {
        console.log(message, Array.isArray(message))
        if (Array.isArray(message)) {
            this._toast.error(message[0]);
        } else {
            this._toast.error(message);
        }
    }

}

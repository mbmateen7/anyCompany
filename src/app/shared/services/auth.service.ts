import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userObjSubject: BehaviorSubject<any>;
    currentUser: Observable<any>;

    constructor() {
        this.userObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userObj')));
        this.currentUser = this.userObjSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.userObjSubject.value;
    }

    storeUserData(token: string | null, userObj: any): void {
        localStorage.setItem('token', token);
        localStorage.setItem('userObj', JSON.stringify(userObj));
        this.userObjSubject.next(true);
        return;
    }


}

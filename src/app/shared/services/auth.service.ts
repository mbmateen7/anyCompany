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
    userPermissionObjSubject: BehaviorSubject<any>;
    permissions: Observable<any>;
    constructor() {
        this.userObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userObj')));
        this.currentUser = this.userObjSubject.asObservable();
        this.userPermissionObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('permissions')));
        this.permissions = this.userPermissionObjSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.userObjSubject.value;
    }

    public get currentUserPermissions(): any {
        return this.userPermissionObjSubject.value;
    }

    storeUserData(token: string | null, userObj: any): void {
        localStorage.setItem('token', token);
        localStorage.setItem('userObj', JSON.stringify(userObj.user));
        localStorage.setItem('permissions', JSON.stringify(userObj.permissions));
        this.userPermissionObjSubject.next(userObj.permissions);
        this.userObjSubject.next(userObj.user);
        return;
    }

    updateUserData(userObj: any): void {
        localStorage.setItem('userObj', JSON.stringify(userObj));
        this.userObjSubject.next(userObj);
        return;
    }

    updateUserPermissions(userObj: any): void {
        localStorage.setItem('permissions', JSON.stringify(userObj.permissions));
        this.userPermissionObjSubject.next(userObj.permissions);
        return;
    }

    checkPermissions(module, action) {
        console.log(module, action);
        return this.currentUserPermissions[module][action];
    }
}

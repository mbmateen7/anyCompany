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
    permissionsObj = {};
    constructor(private router: Router) {
        this.userObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userObj')));
        this.currentUser = this.userObjSubject.asObservable();
        this.userPermissionObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('permissions')));
        this.permissions = this.userPermissionObjSubject.asObservable();
        this.permissionArrayToObj()
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
        this.permissionArrayToObj()
        this.redirectToAllowedModule();
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
        this.permissionArrayToObj()
        return;
    }

    checkPermissions(module, action) {
        return this.permissionsObj[module][action];
    }

    permissionArrayToObj() {
        this.currentUserPermissions?.forEach(element => {
            const code = element.code;
            this.permissionsObj[code] = element;
        });
    }

    redirectToAllowedModule() {
        for (let index = 0; index < this.currentUserPermissions.length; index++) {
            const element = this.currentUserPermissions[index];
            if (element.read) {
                this.router.navigate([element.module]);
                break;
            }

        }
    }
}

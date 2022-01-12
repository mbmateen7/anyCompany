import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userObjSubject: Subject<any>;

    constructor(private http: HttpClient, private router: Router, private toastrService: ToastrService) {
        this.userObjSubject = new Subject();
    }

    storeUserData(token: string | null, userObj: any): void {
        console.log(token, userObj);
        localStorage.setItem('token', token);
        localStorage.setItem('userObj', JSON.stringify(userObj));
        this.userObjSubject.next(true);
        return;
    }


}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalHelper } from '../services/globalHelper';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        public router: Router,
        private helper: GlobalHelper
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        ///// WE HAVE TO IMPLEMENT OUR LOGIC HERE:: START
        const token = localStorage.getItem('token');
        console.log('LoginGuard', token);
        if (token) {
            this.router.navigate(['/dashboard']);
        } else {
            this.helper.clearLocalStorage();
        }
        return true;

        /////////////////// END
    }

}

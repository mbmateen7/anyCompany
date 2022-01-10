import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        public router: Router,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        ///// WE HAVE TO IMPLEMENT OUR LOGIC HERE:: START
        const token = localStorage.getItem('token');
        if (token) {
            if (state.url.includes('refresh')) {
                this.router.navigate(['/login']);
            } else this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }

        /////////////////// END
    }

}

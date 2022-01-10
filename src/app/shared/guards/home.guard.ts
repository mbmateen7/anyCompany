import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(
        public router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        ///// WE HAVE TO IMPLEMENT OUR LOGIC HERE:: START
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return true;
        }
        /////////////////// END
    }
}

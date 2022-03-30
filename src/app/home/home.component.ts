import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _auth: AuthService, private router: Router) {
        this.redirectToAllowedModule()
    }

    ngOnInit(): void {
    }

    redirectToAllowedModule() {
        if (this._auth.checkPermissions('dashboard', 'read')) {
            this.router.navigateByUrl('/dashboard');
        } else if (this._auth.checkPermissions('administration', 'read')) {
            this.router.navigateByUrl('/administration/users');
        } else if (this._auth.checkPermissions('delivery_list', 'read')) {
            this.router.navigateByUrl('/delivery-list/delivery');
        } else if (this._auth.checkPermissions('fsc', 'read')) {
            this.router.navigateByUrl('/fsc/customer-orders');
        } else if (this._auth.checkPermissions('rod', 'read')) {
            this.router.navigateByUrl('/rod');
        } else if (this._auth.checkPermissions('history', 'read')) {
            this.router.navigateByUrl('/history');
        } else if (this._auth.checkPermissions('phonebook', 'read')) {
            this.router.navigateByUrl('/phonebook/customers');
        } else if (this._auth.checkPermissions('accounts', 'read')) {
            this.router.navigateByUrl('/accounts');
        }
    }
}

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
            this.router.navigate(['/dashboard']);
        } else if (this._auth.checkPermissions('administration', 'read')) {
            this.router.navigate(['/administration/users']);
        } else if (this._auth.checkPermissions('delivery-list', 'read')) {
            this.router.navigate(['/delivery-list/delivery']);
        } else if (this._auth.checkPermissions('fsc', 'read')) {
            this.router.navigate(['/fsc/customer-orders']);
        } else if (this._auth.checkPermissions('rod', 'read')) {
            this.router.navigate(['/rod']);
        } else if (this._auth.checkPermissions('history', 'read')) {
            this.router.navigate(['/history']);
        } else if (this._auth.checkPermissions('phonebook', 'read')) {
            this.router.navigate(['/phonebook/customers']);
        } else if (this._auth.checkPermissions('accounts', 'read')) {
            this.router.navigate(['/accounts']);
        }
    }
}

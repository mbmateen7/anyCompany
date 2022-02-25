import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

    user: any;
    constructor(private helper: GlobalHelper, private _authentication: AuthenticationService, private router: Router, private _auth: AuthService) {
        this.user = JSON.parse(localStorage.getItem('userObj'));
        this._auth.currentUser.subscribe(res => {
            if (res !== true) {
                this.user = res;
            }
        })
    }

    ngOnInit(): void {
    }

    logout() {
        this._authentication.logout().subscribe(res => {
            this.helper.clearLocalStorage();
            this.router.navigate(['/login']);
        })
    }



}

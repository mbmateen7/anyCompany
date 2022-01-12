import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

    constructor(private helper: GlobalHelper, private _authentication: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    logout() {
        this._authentication.logout().subscribe(res => {
            this.helper.clearLocalStorage();
            this.router.navigate(['/login']);
        })
    }



}

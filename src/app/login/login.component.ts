import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { GlobalHelper } from '../shared/services/globalHelper';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginObj = {
        email: '',
        password: ''
    };
    emailValidate = {
        length: true,
        valid: true,
    };
    passwordValidate = {
        length: true
    }
    showPassword: boolean = false;
    constructor(private helper: GlobalHelper, private _authentication: AuthenticationService, private _auth: AuthService, private router: Router) {
        // 
    }

    ngOnInit(): void {

    }

    validateEmail() {
        this.emailValidate.length = this.loginObj.email.length > 0 ? true : false;
        this.emailValidate.valid = this.helper.validateEmailAddress(this.loginObj.email);
    }

    validatePassword() {
        this.passwordValidate.length = this.loginObj.password.length > 0 ? true : false;
    }

    showHidePassword() {
        this.showPassword = !this.showPassword;
    }

    submitLogin() {
        this._authentication.login(this.loginObj).subscribe(res => {
            console.log(res.data.access_token, res.data.user)
            this._auth.storeUserData(res.data.access_token, res.data.user);
            this.router.navigateByUrl('/dashboard');
        });
    }

}

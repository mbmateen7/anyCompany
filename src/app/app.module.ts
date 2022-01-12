import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { HeaderInterceptor } from './shared/interceptors/header.interceptor';
import { LoginGuard } from './shared/guards/login.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(
            {
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: false,
                progressBar: true,
                progressAnimation: 'decreasing'
            },
        ),
    ],
    providers: [
        LoginGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginGuard } from './shared/guards/login.guard';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { HeaderInterceptor } from './shared/interceptors/header.interceptor';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
const NgxUiLoadderConfig: NgxUiLoaderConfig =
{
    "bgsColor": "#dc0100",
    "bgsOpacity": 0.3,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "#dc0100",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#dc0100",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 0
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgxUiLoaderModule.forRoot(NgxUiLoadderConfig),
        NgxUiLoaderHttpModule.forRoot({ 'showForeground': true }),
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
        AngularFireModule.initializeApp(environment.firebaseConfig),
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

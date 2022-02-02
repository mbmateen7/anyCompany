import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './shared/guards/home.guard';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        canActivate: [LoginGuard]
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [HomeGuard]
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    },
    {
        path: 'setup-account',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    }
    // {
    //     path: '**',
    //     redirectTo: '/login',
    //     pathMatch: 'full',
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

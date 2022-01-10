import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './shared/guards/home.guard';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
        // canActivate: [LoginGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

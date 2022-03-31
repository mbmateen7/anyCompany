import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from '../shared/guards/permissions.guard';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'administration',
        component: HomeComponent,
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'rod',
        component: HomeComponent,
        loadChildren: () => import('./rod/rod.module').then(m => m.RodModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'delivery-list',
        component: HomeComponent,
        loadChildren: () => import('./delivery-list/delivery-list.module').then(m => m.DeliveryListModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'fsc',
        component: HomeComponent,
        loadChildren: () => import('./fsc/fsc.module').then(m => m.FscModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'history',
        component: HomeComponent,
        loadChildren: () => import('./history/history.module').then(m => m.HistoryModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'phonebook',
        component: HomeComponent,
        loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhonebookModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'accounts',
        component: HomeComponent,
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),
        canActivate: [PermissionsGuard]
    },
    {
        path: 'settings',
        component: HomeComponent,
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'administration',
        component: HomeComponent,
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
    },
    {
        path: 'rod',
        component: HomeComponent,
        loadChildren: () => import('./rod/rod.module').then(m => m.RodModule)
    },
    {
        path: 'delivery-list',
        component: HomeComponent,
        loadChildren: () => import('./delivery-list/delivery-list.module').then(m => m.DeliveryListModule)
    },
    {
        path: 'fsc',
        component: HomeComponent,
        loadChildren: () => import('./fsc/fsc.module').then(m => m.FscModule)
    },
    {
        path: 'history',
        component: HomeComponent,
        loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
    },
    {
        path: 'phonebook',
        component: HomeComponent,
        loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhonebookModule)
    },
    {
        path: 'accounts',
        component: HomeComponent,
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

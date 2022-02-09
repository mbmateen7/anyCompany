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
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

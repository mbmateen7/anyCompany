import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent
    },
    {
        path: 'credit-check',
        component: AccountsComponent
    },
    {
        path: 'fixed-cost',
        component: AccountsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }

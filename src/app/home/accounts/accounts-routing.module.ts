import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { CreditCheckComponent } from './credit-check/credit-check.component';
import { FixedCostComponent } from './fixed-cost/fixed-cost.component';

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent
    },
    {
        path: 'credit-check',
        component: CreditCheckComponent
    },
    {
        path: 'fixed-cost',
        component: FixedCostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }

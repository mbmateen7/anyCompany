import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

const fscRoutes: Routes = [

    // {
    //     path: '',
    //     redirectTo: 'customer-orders',
    // },
    {
        path: 'customer-orders',
        component: CustomerOrderComponent
    },
    {
        path: 'purchase-orders',
        component: PurchaseOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(fscRoutes)],
    exports: [RouterModule]
})
export class FscRoutingModule { }

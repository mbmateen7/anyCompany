import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FscRoutingModule } from './fsc-routing.module';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


@NgModule({
    declarations: [
        CustomerOrderComponent,
        PurchaseOrderComponent
    ],
    imports: [
        CommonModule,
        FscRoutingModule,
        FeatherModule.pick(allIcons)
    ]
})
export class FscModule { }

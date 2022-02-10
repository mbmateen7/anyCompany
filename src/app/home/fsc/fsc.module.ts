import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FscRoutingModule } from './fsc-routing.module';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';


@NgModule({
  declarations: [
    CustomerOrderComponent,
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    FscRoutingModule
  ]
})
export class FscModule { }

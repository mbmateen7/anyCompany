import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FscRoutingModule } from './fsc-routing.module';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CustomerOrderComponent,
        PurchaseOrderComponent
    ],
    imports: [
        CommonModule,
        FscRoutingModule,
        NgbModalModule,
        FormsModule,
        FeatherModule.pick(allIcons)
    ]
})
export class FscModule { }

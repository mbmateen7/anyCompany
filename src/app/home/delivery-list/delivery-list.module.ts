import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryListRoutingModule } from './delivery-list-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { WalkingComponent } from './walking/walking.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
    declarations: [
        DeliveryComponent,
        WalkingComponent
    ],
    imports: [
        CommonModule,
        DeliveryListRoutingModule,
        FormsModule,
        FeatherModule.pick(allIcons),
        SharedModule
    ]
})
export class DeliveryListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryListRoutingModule } from './delivery-list-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { WalkingComponent } from './walking/walking.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
        SharedModule,
        NgbModule,
        NgbDatepickerModule
    ]
})
export class DeliveryListModule { }

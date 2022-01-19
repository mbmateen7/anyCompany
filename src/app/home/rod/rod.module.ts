import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodRoutingModule } from './rod-routing.module';
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { FormsModule } from '@angular/forms';
import { RodComponent } from './rod.component';


@NgModule({
    declarations: [
        RodComponent
    ],
    imports: [
        CommonModule,
        RodRoutingModule,
        FormsModule,
        FeatherModule.pick(allIcons)
    ]
})
export class RodModule { }

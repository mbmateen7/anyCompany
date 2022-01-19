import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FeatherModule.pick(allIcons)
    ]
})
export class DashboardModule { }

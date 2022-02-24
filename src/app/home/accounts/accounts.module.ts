import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
    declarations: [
        AccountsComponent
    ],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        FeatherModule.pick(allIcons),
        SharedModule
    ]
})
export class AccountsModule { }

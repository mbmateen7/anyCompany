import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        UsersComponent,
        RolesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        AdministrationRoutingModule
    ]
})
export class AdministrationModule { }

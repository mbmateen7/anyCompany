import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonebookRoutingModule } from './phonebook-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { InternalListComponent } from './internal-list/internal-list.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CustomersComponent,
        SuppliersComponent,
        InternalListComponent
    ],
    imports: [
        CommonModule,
        PhonebookRoutingModule,
        SharedModule,
        FormsModule,
        FeatherModule.pick(allIcons)
    ]
})
export class PhonebookModule { }

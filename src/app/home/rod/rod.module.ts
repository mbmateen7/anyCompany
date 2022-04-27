import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RodRoutingModule } from './rod-routing.module';
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { FormsModule } from '@angular/forms';
import { RodComponent } from './rod.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
    declarations: [
        RodComponent,
        DeliveryNoteComponent
    ],
    imports: [
        CommonModule,
        RodRoutingModule,
        FormsModule,
        NgbModalModule,
        FeatherModule.pick(allIcons),
        SharedModule,
        NgxPrintModule,
        BsDatepickerModule
    ],
    // providers: [DatePipe]
})
export class RodModule { }

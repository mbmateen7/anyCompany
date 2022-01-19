import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AddEditUserComponent } from '../components/modals/administration/add-edit-user/add-edit-user.component';
import { FormsModule } from '@angular/forms';
import { AddEditRolesComponent } from '../components/modals/administration/add-edit-roles/add-edit-roles.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AddDeliveryNoteComponent } from '../components/modals/rod/add-delivery-note/add-delivery-note.component';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        AddEditUserComponent,
        AddEditRolesComponent,
        AddDeliveryNoteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        FeatherModule.pick(allIcons)
    ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AddEditUserComponent } from '../components/modals/add-edit-user/add-edit-user.component';
import { FormsModule } from '@angular/forms';
import { AddEditRolesComponent } from '../components/modals/add-edit-roles/add-edit-roles.component';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        AddEditUserComponent,
        AddEditRolesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }

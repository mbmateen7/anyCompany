import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }

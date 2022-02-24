import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AddEditUserComponent } from '../components/modals/administration/add-edit-user/add-edit-user.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AddEditRolesComponent } from '../components/modals/administration/add-edit-roles/add-edit-roles.component';
import { AddEditSalesOrderComponent } from '../components/modals/rod/add-edit-sales-order/add-edit-sales-order.component';
import { AddEditCustomerComponent } from '../components/modals/rod/add-edit-customer/add-edit-customer.component';
import { AddJobNotesComponent } from '../components/modals/rod/add-job-notes/add-job-notes.component';
import { UpdateInvoiceScheduleRefComponent } from '../components/modals/rod/update-invoice-schedule-ref/update-invoice-schedule-ref.component';
import { UpdateStatusComponent } from '../components/modals/rod/update-status/update-status.component';
import { DeleteConfirmationComponent } from '../components/modals/rod/delete-confirmation/delete-confirmation.component';
import { TimelineComponent } from '../components/modals/rod/timeline/timeline.component';
import { UpdateDeliveryOrderComponent } from '../components/modals/delivery-list/update-delivery-order/update-delivery-order.component';
import { AddEditPurchaseOrdersComponent } from '../components/modals/fsc/add-edit-purchase-orders/add-edit-purchase-orders.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddEditSupplierComponent } from '../components/modals/phonebook/add-edit-supplier/add-edit-supplier.component';
import { AddEditEmployeeComponent } from '../components/modals/phonebook/add-edit-employee/add-edit-employee.component';
import { AddEditAccountSalesOrderComponent } from '../components/modals/accounts/add-edit-account-sales-order/add-edit-account-sales-order.component';
import { AddEditAccountPurchaseOrderComponent } from '../components/modals/accounts/add-edit-account-purchase-order/add-edit-account-purchase-order.component';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        AddEditUserComponent,
        AddEditRolesComponent,
        AddEditSalesOrderComponent,
        AddEditCustomerComponent,
        AddJobNotesComponent,
        UpdateInvoiceScheduleRefComponent,
        UpdateStatusComponent,
        DeleteConfirmationComponent,
        TimelineComponent,
        UpdateDeliveryOrderComponent,
        AddEditPurchaseOrdersComponent,
        AddEditSupplierComponent,
        AddEditEmployeeComponent,
        AddEditAccountSalesOrderComponent,
        AddEditAccountPurchaseOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        FeatherModule.pick(allIcons),
        NgSelectModule
    ],
    providers: [DatePipe]
})
export class HomeModule { }

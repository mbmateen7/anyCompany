import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { AddEditAccountPurchaseOrderComponent } from '../components/modals/accounts/add-edit-account-purchase-order/add-edit-account-purchase-order.component';
import { AddEditAccountSalesOrderComponent } from '../components/modals/accounts/add-edit-account-sales-order/add-edit-account-sales-order.component';
import { AddEditRolesComponent } from '../components/modals/administration/add-edit-roles/add-edit-roles.component';
import { AddEditUserComponent } from '../components/modals/administration/add-edit-user/add-edit-user.component';
import { UpdateDeliveryOrderComponent } from '../components/modals/delivery-list/update-delivery-order/update-delivery-order.component';
import { AddEditPurchaseOrdersComponent } from '../components/modals/fsc/add-edit-purchase-orders/add-edit-purchase-orders.component';
import { AddEditEmployeeComponent } from '../components/modals/phonebook/add-edit-employee/add-edit-employee.component';
import { AddEditSupplierComponent } from '../components/modals/phonebook/add-edit-supplier/add-edit-supplier.component';
import { AddEditCustomerComponent } from '../components/modals/rod/add-edit-customer/add-edit-customer.component';
import { AddEditSalesOrderComponent } from '../components/modals/rod/add-edit-sales-order/add-edit-sales-order.component';
import { AddJobNotesComponent } from '../components/modals/rod/add-job-notes/add-job-notes.component';
import { DeleteConfirmationComponent } from '../components/modals/rod/delete-confirmation/delete-confirmation.component';
import { TimelineComponent } from '../components/modals/rod/timeline/timeline.component';
import { UpdateInvoiceScheduleRefComponent } from '../components/modals/rod/update-invoice-schedule-ref/update-invoice-schedule-ref.component';
import { UpdateStatusComponent } from '../components/modals/rod/update-status/update-status.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditFixedCostComponent } from '../components/modals/accounts/add-edit-fixed-cost/add-edit-fixed-cost.component';

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
        AddEditAccountPurchaseOrderComponent,
        AddEditFixedCostComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        NgbModalModule,
        FeatherModule.pick(allIcons),
        NgSelectModule
    ],
    providers: [DatePipe]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { WalkingComponent } from './walking/walking.component';

const deliveryRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'delivery',
                component: DeliveryComponent
            },
            {
                path: 'walking',
                component: WalkingComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(deliveryRoutes)],
    exports: [RouterModule]
})
export class DeliveryListRoutingModule { }

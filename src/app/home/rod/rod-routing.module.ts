import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import { RodComponent } from './rod.component';

const rodRoutes: Routes = [
    {
        path: '',
        component: RodComponent
    },
    {
        path: 'delivery-notes/:id',
        component: DeliveryNoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(rodRoutes)],
    exports: [RouterModule]
})
export class RodRoutingModule { }

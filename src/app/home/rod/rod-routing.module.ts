import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RodComponent } from './rod.component';

const rodRoutes: Routes = [
    {
        path: '',
        component: RodComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(rodRoutes)],
    exports: [RouterModule]
})
export class RodRoutingModule { }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

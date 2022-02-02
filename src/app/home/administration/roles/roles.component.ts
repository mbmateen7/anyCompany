import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditRolesComponent } from 'src/app/components/modals/administration/add-edit-roles/add-edit-roles.component';
import { AdministrationService } from 'src/app/shared/services/administration.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    roles: any = [];
    search: string = '';
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    constructor(private helper: GlobalHelper, private _administration: AdministrationService, private _modal: NgbModal) { }

    ngOnInit(): void {
        this.getRoles();
    }

    getRoles() {
        this._administration.rolesListing({ search: this.search }).subscribe(res => {
            this.roles = res.data;
        });
    }


    roleAction(role: any, event: any, index: number) {
        const modal = this._modal.open(AddEditRolesComponent, this.modalConfig);
        modal.componentInstance.role = { ...role };
        modal.componentInstance.type = event;
        modal.componentInstance.response.subscribe((res: any) => {
            modal.close();
            this.getRoles();
        });
    }

    addRole() {
        const modal = this._modal.open(AddEditRolesComponent, this.modalConfig);
        modal.componentInstance.role = {};
        modal.componentInstance.type = 'add';
        modal.componentInstance.response.subscribe((res: any) => {
            modal.close();
            this.getRoles();
        });
    }


    searchRole() {
        if (this.search.length >= 3 || this.search.length == 0) {
            this.getRoles();
        }
    }
}

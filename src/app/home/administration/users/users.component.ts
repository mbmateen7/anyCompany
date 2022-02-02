import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { AdministrationService } from 'src/app/shared/services/administration.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditUserComponent } from 'src/app/components/modals/administration/add-edit-user/add-edit-user.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
    users: any = [];
    roles: any = [];
    search: string = '';
    isLoading: boolean = true;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };

    currentUser = null;
    constructor(private _administration: AdministrationService, private helper: GlobalHelper, private _modal: NgbModal, private _auth: AuthService) {
        this.currentUser = this._auth.currentUserValue;
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers() {
        this._administration.usersListing({ search: this.search }).subscribe(res => {
            this.users = res.data.data;
            this.getRoles();
        });
    }

    getRoles() {
        this._administration.rolesListing().subscribe(res => {
            this.roles = res.data;
            this.isLoading = false;
        })
    }

    updateRole(user: any, event: any, index: number) {
        console.log(user, event.target.value);
        let u = {
            role_id: event.target.value,
            id: user.id,
            name: user.name
        };
        this._administration.updateUser(u).subscribe(res => {
            this.users[index] = res.data;
            this.helper.toastSuccess(res.message);
        });
    }

    userAction(user: any, event: any, index: number) {
        const modal = this._modal.open(AddEditUserComponent, this.modalConfig);
        modal.componentInstance.user = { ...user };
        modal.componentInstance.type = event;
        modal.componentInstance.roles = this.roles;
        modal.componentInstance.response.subscribe((res: any) => {
            console.log(res);
            modal.close();
            if (res.delete) {
                this.users.splice(index, 1);
            } else this.users[index] = res.data;
        });
    }

    updateUserStatus(user) {
        user.status = !user.status;
        this._administration.updateUser(user).subscribe(res => {
            user.status = res.data.status;
        });
    }

    addUser() {
        const modal = this._modal.open(AddEditUserComponent, this.modalConfig);
        modal.componentInstance.user = {};
        modal.componentInstance.type = 'add';
        modal.componentInstance.roles = this.roles;
        modal.componentInstance.response.subscribe((res: any) => {
            modal.close();
            this.getAllUsers();
        });
    }

    searchUser() {
        if (this.search.length >= 3 || this.search.length == 0) {
            this.getAllUsers();
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: any = [];
    isLoading: boolean = true;
    search: string = '';
    constructor(private _users: UserService, private helper: GlobalHelper) { }

    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers() {
        this._users.listing({ search: this.search }).subscribe(res => {
            this.users = res.data;
        });
    }

}

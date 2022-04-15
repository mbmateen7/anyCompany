import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { AddJobNotesComponent } from '../modals/rod/add-job-notes/add-job-notes.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

    user: any;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    constructor(private helper: GlobalHelper, public _firebase: FirebaseService, private router: Router, private _auth: AuthService, private _modal: NgbModal) {
        this.user = JSON.parse(localStorage.getItem('userObj'));
        this._auth.currentUser.subscribe(res => {
            if (res !== true) {
                this.user = res;
            }
        })
    }

    ngOnInit(): void {
    }

    logout() {
        this._auth.logout();
    }

    viewNotification(notification) {
        let not = notification.payload.val();
        if (not.type == 'order') {
            this.router.navigate(
                ['/rod'],
                {
                    queryParams: {
                        work_number: not.data.work_number
                    }
                }
            );
        } else if (not.type == 'note') {
            this.modalConfig.windowClass = "modal-roles job-notes-modal"
            const jobNoteModal = this._modal.open(AddJobNotesComponent, this.modalConfig);
            jobNoteModal.componentInstance.orderId = not.data.id
            jobNoteModal.componentInstance.response.subscribe(res => {

                jobNoteModal.dismiss();
                this.modalConfig.windowClass = "modal-roles"
            });
        }
        this._firebase.readNotification(notification);
    }


}

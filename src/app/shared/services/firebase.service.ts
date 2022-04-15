import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class FirebaseService implements OnDestroy {

    notificationsCount = 0;
    totalNotifications = 0;
    notificationRef: AngularFireList<any>;
    notifications = [];
    notificationSubscriber;
    pageSize = 10;
    private destroyed$ = new Subject<void>();

    constructor(private fireMessaging: AngularFireMessaging, private angularFireDatabase: AngularFireDatabase, private _auth: AuthService, private _modal: NgbModal, private toast: ToastrService) {
    }

    ngOnDestroy() {
        this.removeSubscrtiption();
    }

    removeSubscrtiption() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    requestPermissions() {
        this.notifications = [];
        this.notificationsCount = 0;
        this.pageSize = 10;

        this.fireMessaging.requestPermission.subscribe((res: any) => {
            this.getToken();
        }, err => {
        });
    }

    getToken() {
        this.fireMessaging.requestToken.subscribe((res: any) => {
            if (res) {
                let uuid;
                if (localStorage.getItem('uuid')) {
                    uuid = localStorage.getItem('uuid');
                } else {
                    uuid = this.getUuid();
                }
                this._auth.updateNotificationDetails({ uuid: uuid, firebase_token: res }).subscribe(res => {
                    this.initializeNotificationSettings();
                    localStorage.setItem('uuid', uuid);
                })
            }
        }, err => {
            console.log(err)
        });
    }

    initializeNotificationSettings() {
        this.destroyed$ = new Subject<void>();

        this.notifications = [];
        this.notificationsCount = 0;
        this.pageSize = 10;

        this.initializeInAppNotifications();
        this.fetchNotification();
    }

    private initializeInAppNotifications() {
        this.fireMessaging.messages.pipe(takeUntil(this.destroyed$)).subscribe((res: any) => {
            if (res.data?.logout) this.showReloadAlert(res.data);
            else this.showInAppNotification(res.data);
        })
    }

    private fetchNotification() {
        let currentUser: any;
        currentUser = this._auth.currentUserValue;
        if (!currentUser) return;
        this.notificationRef = this.angularFireDatabase.list('user-' + currentUser.id + '/notifications', ref => {
            ref.orderByChild('created_at')
            return ref;
        });
        this.subscribeNotification();
    }

    private subscribeNotification() {
        this.notificationSubscriber = this.notificationRef.snapshotChanges().pipe(takeUntil(this.destroyed$)).subscribe(notifications => {
            let tempNotification = notifications.slice();
            tempNotification = tempNotification.reverse();
            let unreadCount = tempNotification.length;
            this.notifications = [];
            for (const notification of tempNotification) {
                if (notification.payload) {

                    this.notifications.push(notification);
                    if (notification.payload.val().is_read) {
                        unreadCount--;
                        if (unreadCount < 0) unreadCount = 0;
                        continue;
                    }
                }
            }

            this.notificationsCount = unreadCount;
            this.totalNotifications = this.notifications.length;

        });

    }

    readNotification(notification) {
        const dataRead = notification.payload.val();

        if (dataRead.is_read) return;
        this.notificationRef.update(notification.key, { is_read: true }).then(res => {
            if (dataRead.logout) {
                const obj = {
                    uuid: localStorage.getItem('uuid')
                };
                this._auth.logout();
            }

        }).catch(err => {
            console.log(err);
        });
    }

    showInAppNotification(data) {
        this.toast.success(data?.body, data?.title, {
            enableHtml: true
        });
    }

    getUuid() {
        return uuidv4();
    }

    loadMore(event) {
        event.stopPropagation();
        if (this.totalNotifications > this.pageSize) {
            this.pageSize = this.pageSize + 10;
        }
    }

    showReloadAlert(body) {
        const data = {
            title: body.title,
            message: body.body,
            type: 1
        };
        // const dialog = this._modal.open(ConfirmModalComponent, {
        //     data: data,
        //     width: '400px',
        //     height: 'auto',
        //     hasBackdrop: true,
        //     disableClose: true,
        //     position: {
        //         top: '20px'
        //     }
        // });

        // dialog.afterClosed()
        //     .subscribe((res: any) => {
        //         this.modalRef.closeAll();
        //         let uuid = localStorage.getItem('uuid');
        //         localStorage.clear();
        //         localStorage.setItem('uuid', uuid);
        //         this.router.navigate(['']);
        //     });
    }
}

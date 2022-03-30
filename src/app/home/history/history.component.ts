import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddJobNotesComponent } from 'src/app/components/modals/rod/add-job-notes/add-job-notes.component';
import { TimelineComponent } from 'src/app/components/modals/rod/timeline/timeline.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalHelper } from 'src/app/shared/services/globalHelper';
import { HistoryService } from 'src/app/shared/services/history.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    histories = [];
    searchParams = {
        search: '',
        start_date: '',
        end_date: '',
        page_size: 10,
        page: 1
    }
    totalPages: 1;
    pageFrom = 1;
    pageTo = 10;
    totalCount = 10;
    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    searchSubscription: Subscription;
    dateToday = new Date();
    startDate;
    endDate;
    constructor(private _history: HistoryService, private datePipe: DatePipe, private _modal: NgbModal, private router: Router, private helper: GlobalHelper, public _auth: AuthService) { }

    ngOnInit(): void {
        this.getHistoryListing();
    }

    getHistoryListing() {
        this._history.listing(this.searchParams).subscribe(res => {
            this.histories = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;
        })
    }

    searchOrder(type) {
        if (type == 'search' && (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3)) {
            this.getHistoryListing();
        }
        setTimeout(() => {
            if (type == 'date' && ((this.startDate && this.endDate) || (!this.startDate && !this.endDate))) {
                this.searchParams.start_date = this.startDate ? this.datePipe.transform(this.startDate, 'YYYY-MM-dd') : null;
                this.searchParams.end_date = this.endDate ? this.datePipe.transform(this.endDate, 'YYYY-MM-dd') : null;
                this.getHistoryListing();
            }
        }, 50);
    }

    addJobNote(orderId, index) {
        this.modalConfig.windowClass = "modal-roles job-notes-modal"
        const jobNoteModal = this._modal.open(AddJobNotesComponent, this.modalConfig);
        jobNoteModal.componentInstance.orderId = orderId
        jobNoteModal.componentInstance.response.subscribe(res => {
            if (res.success && !res.close) {
                this.histories[index] = res.data;
            }
            if (res.close) {
                this.getHistoryListing();
                jobNoteModal.dismiss();
                this.modalConfig.windowClass = "modal-roles"
            }
        });
    }

    viewTimeline(rod, index) {
        this.modalConfig.windowClass = 'modal-roles timeline';
        const timelineModal = this._modal.open(TimelineComponent, this.modalConfig);
        timelineModal.componentInstance.rod = rod;
        timelineModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.router.navigate(['rod/delivery-notes', rod.id]);
            }
            if (res.data) {
                this.histories[index] = res.data;
            }
            timelineModal.dismiss();
            this.modalConfig.windowClass = 'modal-roles';
        });

    }


    changePage(event) {
        this.searchParams.page = event;
        this.getHistoryListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getHistoryListing();
    }

    reorder(his, index) {
        this._history.reorder({ id: his.id }).subscribe(res => {
            this.histories.splice(index, 1);
            this.helper.toastSuccess(res.message);
        })
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { UpdateDeliveryOrderComponent } from 'src/app/components/modals/delivery-list/update-delivery-order/update-delivery-order.component';
import { AddJobNotesComponent } from 'src/app/components/modals/rod/add-job-notes/add-job-notes.component';
import { TimelineComponent } from 'src/app/components/modals/rod/timeline/timeline.component';
import { DeliveryListService } from 'src/app/shared/services/deliveryList.service';

@Component({
    selector: 'app-walking',
    templateUrl: './walking.component.html',
    styleUrls: ['./walking.component.css']
})
export class WalkingComponent implements OnInit {

    deliveryListView: number = 1;
    deliveries = [];
    startDate: NgbDateStruct;
    endDate: NgbDateStruct;
    searchParams = {
        search: '',
        start_date: '',
        end_date: '',
        page_size: 10,
        page: 1
    }
    totalPages = 1;
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
    constructor(private _delivery: DeliveryListService, private _modal: NgbModal, private router: Router) { }

    ngOnInit(): void {
        this.getDeliveryListing();
    }



    getDeliveryListing() {
        if (this.searchSubscription) this.searchSubscription.unsubscribe();
        this.searchSubscription = this._delivery.listing(this.searchParams).subscribe(res => {
            this.deliveries = res.data.data;
            this.searchParams.page_size = res.data.per_page
            this.searchParams.page = res.data.current_page
            this.totalPages = res.data.last_page
            this.pageFrom = res.data.from;
            this.pageTo = res.data.to;
            this.totalCount = res.data.total;;

        });
    }

    updateStatus(delivery, index) {
        let data = {
            id: delivery.id,
            status: delivery.status == 'In Factory' ? 'To Factory' : 'In Factory'
        }
        this._delivery.updateDeliveryListStatus(data).subscribe(res => {
            this.deliveries[index] = res.data;
        })
    }

    completeOrder(delivery, index) {
        let data = {
            id: delivery.id,
            status: 'Delivered'
        }
        this._delivery.updateDeliveryListStatus(data).subscribe(res => {
            this.deliveries.splice(index, 1);
        })
    }

    checkProductAttribute(delivery, attribute) {
        return delivery.attributes.find(x => x.name == attribute)
    }

    checkProductAttributeStatus(delivery, attribute) {
        return delivery.attributes.find(x => (x.name == attribute && x.checked));
    }

    updateDeliveryList(delivery, attribute, index) {
        delivery.attributes[delivery.attributes.indexOf(delivery.attributes.find(x => x.name == attribute))].checked = delivery.attributes[delivery.attributes.indexOf(delivery.attributes.find(x => x.name == attribute))].checked ? false : true;
        console.log(delivery);
        this._delivery.updateDeliveryList(delivery).subscribe(res => {
            this.deliveries[index] = res.data;
        }, err => {
            delivery.attributes[delivery.attributes.indexOf(delivery.attributes.find(x => x.name == attribute))].checked = delivery.attributes[delivery.attributes.indexOf(delivery.attributes.find(x => x.name == attribute))].checked ? false : true;
        });
    }

    addJobNote(orderId, index) {
        this.modalConfig.windowClass = "modal-roles job-notes-modal"
        const jobNoteModal = this._modal.open(AddJobNotesComponent, this.modalConfig);
        jobNoteModal.componentInstance.orderId = orderId
        jobNoteModal.componentInstance.response.subscribe(res => {
            if (res.success && !res.close) {
                this.deliveries[index] = res.data;
            }
            if (res.close) {
                this.getDeliveryListing();
                jobNoteModal.dismiss();
                this.modalConfig.windowClass = "modal-roles"
            }
        });
    }

    viewTimeline(rod, index) {
        this.modalConfig.windowClass = 'modal-roles timeline';
        const timelineModal = this._modal.open(TimelineComponent, this.modalConfig);
        timelineModal.componentInstance.rod = { ...rod };
        timelineModal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.router.navigate(['rod/delivery-notes', rod.id]);
            }
            timelineModal.dismiss();
            this.modalConfig.windowClass = 'modal-roles';
        });

    }

    editWorkOrder(delivery, index) {
        this.modalConfig.windowClass = 'modal-roles edit-work-order'
        const modal = this._modal.open(UpdateDeliveryOrderComponent, this.modalConfig);
        modal.componentInstance.order = { ...delivery };
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.deliveries[index] = res.data
            }
            modal.close();
        })

    }

    searchOrder(type) {
        if (type == 'search' && (this.searchParams.search.length == 0 || this.searchParams.search.length >= 3)) {
            this.getDeliveryListing();
        }
        if (type == 'date' && ((this.startDate && this.endDate) || (!this.startDate && !this.endDate))) {
            this.searchParams.start_date = this.startDate ? this.startDate.day + '-' + this.startDate.month + '-' + this.startDate.year : null;
            this.searchParams.end_date = this.endDate ? this.endDate.day + '-' + this.endDate.month + '-' + this.endDate.year : null;
            this.getDeliveryListing();
        }
    }

    changePage(event) {
        this.searchParams.page = event;
        this.getDeliveryListing();
    }

    ChangePageSize(event) {
        this.searchParams.page = 1;
        this.searchParams.page_size = event;
        this.getDeliveryListing();
    }
}

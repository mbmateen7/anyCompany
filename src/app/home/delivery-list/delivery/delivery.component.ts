import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateDeliveryOrderComponent } from 'src/app/components/modals/delivery-list/update-delivery-order/update-delivery-order.component';
import { AddJobNotesComponent } from 'src/app/components/modals/rod/add-job-notes/add-job-notes.component';
import { TimelineComponent } from 'src/app/components/modals/rod/timeline/timeline.component';
import { DeliveryListService } from 'src/app/shared/services/deliveryList.service';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

    deliveryListView: number = 1;
    deliveries = [];

    modalConfig = {
        animated: true,
        keyboard: false,
        backdrop: false,
        ignoreBackdropClick: true,
        windowClass: "modal-roles"
    };
    constructor(private _delivery: DeliveryListService, private _modal: NgbModal, private router: Router) { }

    ngOnInit(): void {
        this.getDeliveryListing();
    }

    getDeliveryListing() {
        this._delivery.listing().subscribe(res => {
            this.deliveries = res.data.data;

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
        timelineModal.componentInstance.rod = rod;
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
        modal.componentInstance.order = delivery;
        modal.componentInstance.response.subscribe(res => {
            if (res.success) {
                this.deliveries[index] = res.data
            }
            modal.close();
        })

    }

}

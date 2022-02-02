import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RodService } from 'src/app/shared/services/rod.service';

@Component({
    selector: 'app-add-job-notes',
    templateUrl: './add-job-notes.component.html',
    styleUrls: ['./add-job-notes.component.css']
})
export class AddJobNotesComponent implements OnInit {
    @Input() orderId;
    @Output() response: EventEmitter<any> = new EventEmitter();
    jobNotes = [];
    currentPage = 1;
    nextPage: boolean = false;
    newNote = {
        title: '',
        description: '',
        work_order_id: 0,
    }
    constructor(private _rod: RodService) { }

    ngOnInit(): void {
        this.newNote.work_order_id = this.orderId;
        this.getJobNotes();
    }

    cancel() {
        this.response.emit({ success: false, close: true });
    }

    getJobNotes(next = false) {
        if (next) {
            this.currentPage++;
        }
        this._rod.getJobNotes({ work_order_id: this.orderId, page: this.currentPage }).subscribe(res => {
            res = res.data
            this.jobNotes = [...this.jobNotes, ...res.data];
            this.nextPage = res.next_page_url ? true : false;
        })
    }

    addJobNote() {
        this._rod.addJobNote(this.newNote).subscribe(res => {
            this.jobNotes.push(res.data);
            this.newNote.description = '';
            this.newNote.title = ''
        })
    }

    deleteJobNote(id, index) {
        this._rod.deleteJobNote({ id: id }).subscribe(res => {
            this.jobNotes.splice(index, 1);
            this.response.emit({ success: true, close: false, data: res.data });
        })
    }

}

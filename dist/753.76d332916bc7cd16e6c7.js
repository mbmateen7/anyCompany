"use strict";(self.webpackChunkhumphree=self.webpackChunkhumphree||[]).push([[753],{2212:(f,h,l)=>{l.d(h,{_:()=>A});var e=l(3018),r=l(1702),m=l(8583),p=l(665),v=l(5411);function u(a,Z){if(1&a){const n=e.EpF();e.TgZ(0,"div",28),e.TgZ(1,"div",29),e.TgZ(2,"div",30),e._UZ(3,"img",31),e.qZA(),e.TgZ(4,"p",32),e._uU(5),e.qZA(),e.TgZ(6,"p",33),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"div",34),e.TgZ(9,"p",35),e._uU(10),e.qZA(),e._UZ(11,"div",36),e.qZA(),e.TgZ(12,"div",37),e.TgZ(13,"a",38),e.TgZ(14,"i-feather",39),e.NdJ("click",function(){const _=e.CHM(n),i=_.$implicit,c=_.index;return e.oxw(2).deleteJobNote(i.id,c)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const n=Z.$implicit;e.xp6(3),e.Q6J("src",n.user.profile_picture,e.LSH),e.xp6(2),e.Oqu(n.user.name),e.xp6(2),e.hij("(",n.user.role.title,")"),e.xp6(3),e.Oqu(n.title),e.xp6(1),e.Q6J("innerHtml",n.description,e.oJD)}}function T(a,Z){if(1&a){const n=e.EpF();e.TgZ(0,"div",40),e.TgZ(1,"a",41),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).getJobNotes(!0)}),e._uU(2," LOAD MORE "),e.qZA(),e.qZA()}}function o(a,Z){if(1&a&&(e.TgZ(0,"div",24),e.TgZ(1,"div",25),e.YNc(2,u,15,5,"div",26),e.qZA(),e.YNc(3,T,3,0,"div",27),e.qZA()),2&a){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.jobNotes),e.xp6(1),e.Q6J("ngIf",n.nextPage)}}let A=(()=>{class a{constructor(n){this._rod=n,this.response=new e.vpe,this.jobNotes=[],this.currentPage=1,this.nextPage=!1,this.newNote={title:"",description:"",work_order_id:0}}ngOnInit(){this.newNote.work_order_id=this.orderId,this.getJobNotes()}cancel(){this.response.emit({success:!1,close:!0})}getJobNotes(n=!1){n&&this.currentPage++,this._rod.getJobNotes({work_order_id:this.orderId,page:this.currentPage}).subscribe(d=>{this.jobNotes=[...this.jobNotes,...(d=d.data).data],this.nextPage=!!d.next_page_url})}addJobNote(){this._rod.addJobNote(this.newNote).subscribe(n=>{this.jobNotes.push(n.data),this.newNote.description="",this.newNote.title=""})}deleteJobNote(n,d){this._rod.deleteJobNote({id:n}).subscribe(_=>{this.jobNotes.splice(d,1),this.response.emit({success:!0,close:!1,data:_.data})})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(r.W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-job-notes"]],inputs:{orderId:"orderId"},outputs:{response:"response"},decls:42,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],["class","job-note-upper",4,"ngIf"],[1,"input-style","mt-1","mb-2"],[1,"d-block"],[1,"text-danger"],["type","text","placeholder","Title",1,"ctm-input",3,"ngModel","ngModelChange"],[1,"text-area-modal","mb-1"],[1,"input-style"],["placeholder","Add Text For Job Note",1,"ctm-textarea",3,"ngModel","ngModelChange"],[1,"notify-main-box","d-flex","align-items-center","justify-content-between"],[1,"notify-to"],[1,"remember-me"],[1,"custom-check","custom-check-r"],["type","checkbox","checked","checked"],[1,"checkmark"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"discard-btn",3,"click"],["href","javascript:void(0) ",1,"add-btn",3,"click"],[1,"job-note-upper"],[1,"main-note-box"],["class","note-1 d-flex align-items-start justify-content-between",4,"ngFor","ngForOf"],["class","blur-box",4,"ngIf"],[1,"note-1","d-flex","align-items-start","justify-content-between"],[1,"img-card-sec"],[1,"img-note"],["alt","img",1,"img-fluid",3,"src"],[1,"name-img"],[1,"dir"],[1,"job-heading-main"],[1,"job-heading"],[1,"para-job",3,"innerHtml"],[1,"trash-box","d-flex","align-items-center"],["href","javascript:void(0)",1,"edit-btn"],["name","trash-2",1,"delete-icon-modal",3,"click"],[1,"blur-box"],["href","javascript:void(0)",1,"load-more-btn",3,"click"]],template:function(n,d){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e._uU(2,"JOB NOTES"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.YNc(8,o,4,2,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"label",8),e._uU(11,"Title Job Note"),e.TgZ(12,"span",9),e._uU(13,"*"),e.qZA(),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(i){return d.newNote.title=i}),e.qZA(),e.qZA(),e.TgZ(15,"div",11),e.TgZ(16,"div",12),e.TgZ(17,"textarea",13),e.NdJ("ngModelChange",function(i){return d.newNote.description=i}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",14),e.TgZ(19,"p",15),e._uU(20," Notify To "),e.qZA(),e.TgZ(21,"div",16),e.TgZ(22,"label",17),e._uU(23,"Director "),e._UZ(24,"input",18),e._UZ(25,"span",19),e.qZA(),e.qZA(),e.TgZ(26,"div",16),e.TgZ(27,"label",17),e._uU(28,"Accounts "),e._UZ(29,"input",18),e._UZ(30,"span",19),e.qZA(),e.qZA(),e.TgZ(31,"div",16),e.TgZ(32,"label",17),e._uU(33,"Basic "),e._UZ(34,"input",18),e._UZ(35,"span",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",20),e.TgZ(37,"div",21),e.TgZ(38,"a",22),e.NdJ("click",function(){return d.cancel()}),e._uU(39,"Close"),e.qZA(),e.TgZ(40,"a",23),e.NdJ("click",function(){return d.addJobNote()}),e._uU(41,"Add"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(8),e.Q6J("ngIf",d.jobNotes.length),e.xp6(6),e.Q6J("ngModel",d.newNote.title),e.xp6(3),e.Q6J("ngModel",d.newNote.description))},directives:[m.O5,p.Fj,p.JJ,p.On,m.sg,v.uy],styles:[""]}),a})()},6550:(f,h,l)=>{l.d(h,{z:()=>_});var e=l(3018),r=l(1702),m=l(9075),p=l(8583);function v(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1,"Multiple"),e.qZA()}}function u(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Oqu(null==t.rod.delivery_notes[0]?null:t.rod.delivery_notes[0].ticket_no)}}const T=function(i){return{invisible:i}};function o(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"li",22),e.TgZ(1,"ul",23),e.TgZ(2,"li",24),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",25),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"ul",23),e.TgZ(7,"li",24),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",25),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"ul",26),e.TgZ(12,"li",24),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",25),e.TgZ(15,"a",20),e.NdJ("click",function(){e.CHM(t);const g=e.oxw().$implicit;return e.oxw().jobDetail=g}),e._uU(16," View "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"p",27),e._uU(18),e.ALo(19,"date"),e.qZA(),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,T,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function A(i,c){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,o,20,9,"li",21),e.qZA()),2&i){const t=c.index;e.xp6(1),e.Q6J("ngIf",t%2==0)}}function a(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"li",22),e.TgZ(1,"ul",23),e.TgZ(2,"li",24),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",25),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"ul",23),e.TgZ(7,"li",24),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",25),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"ul",26),e.TgZ(12,"li",24),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",25),e.TgZ(15,"a",20),e.NdJ("click",function(){e.CHM(t);const g=e.oxw().$implicit;return e.oxw().jobDetail=g}),e._uU(16," View "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"p",27),e._uU(18),e.ALo(19,"date"),e.qZA(),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,T,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function Z(i,c){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,a,20,9,"li",21),e.qZA()),2&i){const t=c.index;e.xp6(1),e.Q6J("ngIf",t%2!=0)}}function n(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",28),e.TgZ(1,"span",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().jobDetail=null}),e._uU(2,"X"),e.qZA(),e.TgZ(3,"h4",30),e._uU(4,"Job Note "),e._UZ(5,"i",31),e.qZA(),e.TgZ(6,"div",32),e._UZ(7,"div",33),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(7),e.Q6J("innerHtml",t.safeHtml(t.jobDetail.description),e.oJD)}}const d=function(i){return{"show-job-note":i}};let _=(()=>{class i{constructor(t,s){this._rod=t,this.sanitizer=s,this.response=new e.vpe,this.jobNotes=[],this.jobDetail=null}ngOnInit(){this._rod.getJobNotes({work_order_id:this.rod.id}).subscribe(t=>{this.jobNotes=t.data.data})}close(){this.response.emit({success:!1})}viewDeliveryNotes(){this.response.emit({success:!0})}safeHtml(t){return this.sanitizer.bypassSecurityTrustHtml(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.W),e.Y36(m.H7))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-timeline"]],inputs:{rod:"rod"},outputs:{response:"response"},decls:56,vars:13,consts:[[1,"modal-header"],[1,"modal-title"],["type","button ","data-dismiss","modal ",1,"close"],[1,"modal-body"],[1,"timeline-table"],[1,"modal-table","table-responsive"],[1,"table"],["class","view-anchor view-anchor-red",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red","href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",1,"view-anchor","view-anchor-red"],[1,"timeline-section","d-flex","justify-content-between"],[1,"timeline-card-main",3,"ngClass"],[1,"cars-time-list"],[4,"ngFor","ngForOf"],[1,"bottom-card-list"],["class","job-details-section",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"add-btn",3,"click"],[1,"view-anchor","view-anchor-red",3,"click"],["href","javascript:void(0)",1,"view-anchor","view-anchor-red",3,"click"],["class","card-timeline",4,"ngIf"],[1,"card-timeline"],[1,"card-ul-timeline"],[1,"timeline-name-heading"],[1,"timeline-name"],[1,"card-ul-timeline",3,"ngClass"],[1,"date-center"],[1,"job-details-section"],[1,"close-job-details",3,"click"],[1,"title"],[1,"bi","bi-arrow-right"],[1,"job-note-description"],[3,"innerHtml"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e._uU(2,"TIMELINE"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"table",6),e.TgZ(9,"thead"),e.TgZ(10,"tr"),e.TgZ(11,"th"),e._uU(12,"Work#"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Customer"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Order#"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Product"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Progress"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Deliver Note"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Production Schedule"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"tbody"),e.TgZ(26,"tr"),e.TgZ(27,"td"),e._uU(28),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.qZA(),e.TgZ(33,"td"),e._uU(34),e.qZA(),e.TgZ(35,"td"),e._uU(36),e.qZA(),e.TgZ(37,"td"),e.YNc(38,v,2,0,"a",7),e.YNc(39,u,2,1,"a",8),e.qZA(),e.TgZ(40,"td"),e.TgZ(41,"a",9),e._uU(42," View "),e.qZA(),e.qZA(),e._UZ(43,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(44,"div",10),e.TgZ(45,"div",11),e.TgZ(46,"ul",12),e.YNc(47,A,2,1,"div",13),e.qZA(),e.TgZ(48,"div",14),e.TgZ(49,"ul",12),e.YNc(50,Z,2,1,"div",13),e.qZA(),e.qZA(),e.qZA(),e.YNc(51,n,8,1,"div",15),e.qZA(),e.qZA(),e.TgZ(52,"div",16),e.TgZ(53,"div",17),e.TgZ(54,"a",18),e.NdJ("click",function(){return s.close()}),e._uU(55,"Close"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(28),e.Oqu(s.rod.work_number),e.xp6(2),e.Oqu(s.rod.customer.name),e.xp6(2),e.Oqu(s.rod.order_number),e.xp6(2),e.Oqu(s.rod.product.name),e.xp6(2),e.Oqu(s.rod.progress),e.xp6(2),e.Q6J("ngIf",s.rod.delivery_notes_count>1),e.xp6(1),e.Q6J("ngIf",1==s.rod.delivery_notes_count),e.xp6(6),e.Q6J("ngClass",e.VKq(11,d,null!=s.jobDetail)),e.xp6(2),e.Q6J("ngForOf",s.jobNotes),e.xp6(3),e.Q6J("ngForOf",s.jobNotes),e.xp6(1),e.Q6J("ngIf",s.jobDetail))},directives:[p.O5,p.mk,p.sg],pipes:[p.uU],styles:[".timeline-card-main.show-job-note[_ngcontent-%COMP%]{max-width:75%}.job-details-section[_ngcontent-%COMP%]{width:25%;min-width:25%;position:relative;padding-left:10px;border-left:.5px solid #ccc}.job-details-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:#dc0100;text-transform:uppercase}.close-job-details[_ngcontent-%COMP%]{color:inherit;cursor:pointer;position:absolute;right:15px;top:1px;font-size:13px;font-weight:bolder}.job-note-description[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:12px}.job-note-description[_ngcontent-%COMP%]   .timeline-job-note-details[_ngcontent-%COMP%]{font-weight:bold}"]}),i})()},1702:(f,h,l)=>{l.d(h,{W:()=>v});var e=l(2340),r=l(4312),m=l(3018),p=l(1841);let v=(()=>{class u{constructor(o){this.http=o}rodListing(o={}){return this.http.post(`${e.N.apiUrl+r.j.rodListing}`,o)}productsListing(o={}){return this.http.post(`${e.N.apiUrl+r.j.productListing}`,o)}storeWorkOrder(o={}){return this.http.post(`${e.N.apiUrl+r.j.storeWorkOrder}`,o)}getWorkOrder(o={}){return this.http.post(`${e.N.apiUrl+r.j.getWorkOrder}`,o)}getCustomerNumberOrders(o={}){return this.http.post(`${e.N.apiUrl+r.j.getCustomerOrders}`,o)}updateInvoiceNo(o={}){return this.http.post(`${e.N.apiUrl+r.j.updateInvoiceNo}`,o)}updateWorkOrder(o={}){return this.http.post(`${e.N.apiUrl+r.j.updateWorkOrder}`,o)}getJobNotes(o={}){return this.http.post(`${e.N.apiUrl+r.j.getJobNotes}`,o)}addJobNote(o={}){return this.http.post(`${e.N.apiUrl+r.j.addJobNote}`,o)}deleteJobNote(o={}){return this.http.post(`${e.N.apiUrl+r.j.deleteJobNote}`,o)}addDevliveryNote(o={}){return this.http.post(`${e.N.apiUrl+r.j.addDeliveryNote}`,o)}updateDeliveryNote(o={}){return this.http.post(`${e.N.apiUrl+r.j.updateDeliveryNote}`,o)}getDeliveryNotes(o={}){return this.http.post(`${e.N.apiUrl+r.j.getDeliveryNotes}`,o)}multipleUpdateOrder(o={}){return this.http.post(`${e.N.apiUrl+r.j.multiOrderUpdate}`,o)}updateOrderStatus(o={}){return this.http.post(`${e.N.apiUrl+r.j.updateOrderStatus}`,o)}bulkStatusUpdate(o={}){return this.http.post(`${e.N.apiUrl+r.j.bulkStatusUpdate}`,o)}}return u.\u0275fac=function(o){return new(o||u)(m.LFG(p.eN))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);
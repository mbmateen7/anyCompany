"use strict";(self.webpackChunkhumphree=self.webpackChunkhumphree||[]).push([[66],{2212:(N,f,r)=>{r.d(f,{_:()=>T});var e=r(6435),u=r(1702),m=r(9808),h=r(6783),g=r(4182);function Z(l,_){if(1&l){const n=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"div",30),e._UZ(3,"img",31),e.qZA(),e.TgZ(4,"p",32),e._uU(5),e.qZA(),e.TgZ(6,"p",33),e._uU(7),e.qZA()(),e.TgZ(8,"div",34)(9,"p",35),e._uU(10),e.TgZ(11,"span",36),e._uU(12),e.ALo(13,"date"),e.qZA()(),e._UZ(14,"div",37),e.qZA(),e.TgZ(15,"div",38)(16,"a",39)(17,"i-feather",40),e.NdJ("click",function(){const a=e.CHM(n),p=a.$implicit,x=a.index;return e.oxw(2).deleteJobNote(p.id,x)}),e.qZA()()()()}if(2&l){const n=_.$implicit;e.xp6(3),e.Q6J("src",n.user.profile_picture,e.LSH),e.xp6(2),e.Oqu(n.user.name),e.xp6(2),e.hij("(",n.user.role.title,")"),e.xp6(3),e.hij("",n.title," "),e.xp6(2),e.hij("(",e.xi3(13,6,n.created_at,"dd LLLL, yyyy @ h:mm a"),")"),e.xp6(2),e.Q6J("innerHtml",n.description,e.oJD)}}function b(l,_){if(1&l){const n=e.EpF();e.TgZ(0,"div",41)(1,"a",42),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).getJobNotes(!0)}),e._uU(2," LOAD MORE "),e.qZA()()}}function v(l,_){if(1&l&&(e.TgZ(0,"div",24)(1,"div",25),e.YNc(2,Z,18,9,"div",26),e.qZA(),e.YNc(3,b,3,0,"div",27),e.qZA()),2&l){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.jobNotes),e.xp6(1),e.Q6J("ngIf",n.nextPage)}}let T=(()=>{class l{constructor(n){this._rod=n,this.response=new e.vpe,this.jobNotes=[],this.currentPage=1,this.nextPage=!1,this.newNote={title:"",description:"",work_order_id:0}}ngOnInit(){this.newNote.work_order_id=this.orderId,this.getJobNotes()}cancel(){this.response.emit({success:!1,close:!0})}getJobNotes(n=!1){n&&this.currentPage++,this._rod.getJobNotes({work_order_id:this.orderId,page:this.currentPage}).subscribe(s=>{this.jobNotes=[...this.jobNotes,...(s=s.data).data],this.nextPage=!!s.next_page_url})}addJobNote(){this._rod.addJobNote(this.newNote).subscribe(n=>{this.jobNotes.push(n.data),this.newNote.description="",this.newNote.title=""})}deleteJobNote(n,s){this._rod.deleteJobNote({id:n}).subscribe(a=>{this.jobNotes.splice(s,1),this.response.emit({success:!0,close:!1,data:a.data})})}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(u.W))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-add-job-notes"]],inputs:{orderId:"orderId"},outputs:{response:"response"},decls:42,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],["class","job-note-upper",4,"ngIf"],[1,"input-style","mt-1","mb-2"],[1,"d-block"],[1,"text-danger"],["type","text","placeholder","Title",1,"ctm-input",3,"ngModel","ngModelChange"],[1,"text-area-modal","mb-1"],[1,"input-style"],["placeholder","Add Text For Job Note",1,"ctm-textarea",3,"ngModel","ngModelChange"],[1,"notify-main-box","d-flex","align-items-center","justify-content-between"],[1,"notify-to"],[1,"remember-me"],[1,"custom-check","custom-check-r"],["type","checkbox","checked","checked"],[1,"checkmark"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"discard-btn",3,"click"],["href","javascript:void(0) ",1,"add-btn",3,"click"],[1,"job-note-upper"],[1,"main-note-box"],["class","note-1 d-flex align-items-start justify-content-between",4,"ngFor","ngForOf"],["class","blur-box",4,"ngIf"],[1,"note-1","d-flex","align-items-start","justify-content-between"],[1,"img-card-sec"],[1,"img-note"],["alt","img",1,"img-fluid",3,"src"],[1,"name-img"],[1,"dir"],[1,"job-heading-main"],[1,"job-heading"],[1,"text","text-muted","small","ml-1"],[1,"para-job",3,"innerHtml"],[1,"trash-box","d-flex","align-items-center"],["href","javascript:void(0)",1,"edit-btn"],["name","trash-2",1,"delete-icon-modal",3,"click"],[1,"blur-box"],["href","javascript:void(0)",1,"load-more-btn",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"JOB NOTES"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5),e.YNc(8,v,4,2,"div",6),e.TgZ(9,"div",7)(10,"label",8),e._uU(11,"Title Job Note"),e.TgZ(12,"span",9),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(p){return s.newNote.title=p}),e.qZA()(),e.TgZ(15,"div",11)(16,"div",12)(17,"textarea",13),e.NdJ("ngModelChange",function(p){return s.newNote.description=p}),e.qZA()()(),e.TgZ(18,"div",14)(19,"p",15),e._uU(20," Notify To "),e.qZA(),e.TgZ(21,"div",16)(22,"label",17),e._uU(23,"Director "),e._UZ(24,"input",18)(25,"span",19),e.qZA()(),e.TgZ(26,"div",16)(27,"label",17),e._uU(28,"Accounts "),e._UZ(29,"input",18)(30,"span",19),e.qZA()(),e.TgZ(31,"div",16)(32,"label",17),e._uU(33,"Basic "),e._UZ(34,"input",18)(35,"span",19),e.qZA()()()()()(),e.TgZ(36,"div",20)(37,"div",21)(38,"a",22),e.NdJ("click",function(){return s.cancel()}),e._uU(39,"Close"),e.qZA(),e.TgZ(40,"a",23),e.NdJ("click",function(){return s.addJobNote()}),e._uU(41,"Add"),e.qZA()()()),2&n&&(e.xp6(8),e.Q6J("ngIf",s.jobNotes.length),e.xp6(6),e.Q6J("ngModel",s.newNote.title),e.xp6(3),e.Q6J("ngModel",s.newNote.description))},directives:[m.O5,m.sg,h.u,g.Fj,g.JJ,g.On],pipes:[m.uU],styles:[""]}),l})()},88:(N,f,r)=>{r.d(f,{z:()=>q});var e=r(6435),u=r(9808);function m(o,c){if(1&o&&(e.TgZ(0,"div",9)(1,"div",10)(2,"p",11),e._uU(3),e.qZA(),e.TgZ(4,"a",12),e._uU(5,"View"),e.qZA()()()),2&o){const t=c.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(1),e.Q6J("href",t.location,e.LSH)}}let h=(()=>{class o{constructor(){this.data=[],this.response=new e.vpe}ngOnInit(){}cancel(){this.response.emit({success:!1})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-production-schedule"]],inputs:{data:"data"},outputs:{response:"response"},decls:12,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"row"],["class","col-md-12",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"discard-btn",3,"click"],[1,"col-md-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"d-inline-flex"],["target","_blank",3,"href"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Production Schedules"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4),e.YNc(7,m,6,2,"div",5),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"a",8),e.NdJ("click",function(){return i.cancel()}),e._uU(11,"Close"),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",i.data))},directives:[u.sg],styles:[".border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin-top:10px;padding-bottom:5px}.border-bottom[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .border-bottom[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:0}"]}),o})();var g=r(1702),Z=r(2313),b=r(2746);function v(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1,"Multiple"),e.qZA()}}function T(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.rod.delivery_notes[0]?null:t.rod.delivery_notes[0].ticket_no)}}function l(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewProductionSchedule()}),e._uU(1," Multiple "),e.qZA()}}function _(o,c){if(1&o&&(e.TgZ(0,"a",21),e._uU(1," View "),e.qZA()),2&o){const t=e.oxw();e.Q6J("href",t.rod.attachemnts[0].location,e.LSH)}}const n=function(o){return{invisible:o}};function s(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",23)(1,"ul",24)(2,"li",25),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",26),e._uU(5),e.qZA()(),e.TgZ(6,"ul",24)(7,"li",25),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",26),e._uU(10),e.qZA()(),e.TgZ(11,"ul",27)(12,"li",25),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",26)(15,"a",20),e.NdJ("click",function(){e.CHM(t);const d=e.oxw().$implicit;return e.oxw().jobDetail=d}),e._uU(16," View "),e.qZA()()(),e.TgZ(17,"p",28),e._uU(18),e.ALo(19,"date"),e.qZA()()}if(2&o){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,n,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function a(o,c){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,s,20,9,"li",22),e.qZA()),2&o){const t=c.index;e.xp6(1),e.Q6J("ngIf",t%2==0)}}function p(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",23)(1,"ul",24)(2,"li",25),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",26),e._uU(5),e.qZA()(),e.TgZ(6,"ul",24)(7,"li",25),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",26),e._uU(10),e.qZA()(),e.TgZ(11,"ul",27)(12,"li",25),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",26)(15,"a",20),e.NdJ("click",function(){e.CHM(t);const d=e.oxw().$implicit;return e.oxw().jobDetail=d}),e._uU(16," View "),e.qZA()()(),e.TgZ(17,"p",28),e._uU(18),e.ALo(19,"date"),e.qZA()()}if(2&o){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,n,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function x(o,c){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,p,20,9,"li",22),e.qZA()),2&o){const t=c.index;e.xp6(1),e.Q6J("ngIf",t%2!=0)}}function C(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",29)(1,"span",30),e.NdJ("click",function(){return e.CHM(t),e.oxw().jobDetail=null}),e._uU(2,"X"),e.qZA(),e.TgZ(3,"h4",31),e._uU(4,"Job Note "),e._UZ(5,"i",32),e.qZA(),e.TgZ(6,"div",33),e._UZ(7,"div",34),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(7),e.Q6J("innerHtml",t.safeHtml(t.jobDetail.description),e.oJD)}}const w=function(o){return{"show-job-note":o}};let q=(()=>{class o{constructor(t,i,d){this._rod=t,this.sanitizer=i,this._modal=d,this.response=new e.vpe,this.jobNotes=[],this.jobDetail=null,this.modalConfig={animated:!0,keyboard:!1,backdrop:!1,ignoreBackdropClick:!0,windowClass:"modal-roles"}}ngOnInit(){this._rod.getTimeline({work_order_id:this.rod.id,timeline:!0}).subscribe(t=>{this.jobNotes=t.data})}close(){this.response.emit({success:!1})}viewDeliveryNotes(){this.response.emit({success:!0})}safeHtml(t){return this.sanitizer.bypassSecurityTrustHtml(t)}viewProductionSchedule(){const t=this._modal.open(h,this.modalConfig);t.componentInstance.data=this.rod.attachments,t.componentInstance.response.subscribe(i=>{t.dismiss()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.W),e.Y36(Z.H7),e.Y36(b.FF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-timeline"]],inputs:{rod:"rod"},outputs:{response:"response"},decls:56,vars:15,consts:[[1,"modal-header"],[1,"modal-title"],["type","button ","data-dismiss","modal ",1,"close"],[1,"modal-body"],[1,"timeline-table"],[1,"modal-table","table-responsive"],[1,"table"],["class","view-anchor view-anchor-red",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red","href","javascript:void(0)",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red",3,"href",4,"ngIf"],[1,"timeline-section","d-flex","justify-content-between"],[1,"timeline-card-main",3,"ngClass"],[1,"cars-time-list"],[4,"ngFor","ngForOf"],[1,"bottom-card-list"],["class","job-details-section",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"add-btn",3,"click"],[1,"view-anchor","view-anchor-red",3,"click"],["href","javascript:void(0)",1,"view-anchor","view-anchor-red",3,"click"],[1,"view-anchor","view-anchor-red",3,"href"],["class","card-timeline",4,"ngIf"],[1,"card-timeline"],[1,"card-ul-timeline"],[1,"timeline-name-heading"],[1,"timeline-name"],[1,"card-ul-timeline",3,"ngClass"],[1,"date-center"],[1,"job-details-section"],[1,"close-job-details",3,"click"],[1,"title"],[1,"bi","bi-arrow-right"],[1,"job-note-description"],[3,"innerHtml"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"TIMELINE"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"table",6)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Work#"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Customer"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Order#"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Product"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Progress"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Deliver Note"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Production Schedule"),e.qZA()()(),e.TgZ(25,"tbody")(26,"tr")(27,"td"),e._uU(28),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.qZA(),e.TgZ(33,"td"),e._uU(34),e.qZA(),e.TgZ(35,"td"),e._uU(36),e.qZA(),e.TgZ(37,"td"),e.YNc(38,v,2,0,"a",7),e.YNc(39,T,2,1,"a",8),e.qZA(),e.TgZ(40,"td"),e.YNc(41,l,2,0,"a",8),e.YNc(42,_,2,1,"a",9),e.qZA(),e._UZ(43,"td"),e.qZA()()()()(),e.TgZ(44,"div",10)(45,"div",11)(46,"ul",12),e.YNc(47,a,2,1,"div",13),e.qZA(),e.TgZ(48,"div",14)(49,"ul",12),e.YNc(50,x,2,1,"div",13),e.qZA()()(),e.YNc(51,C,8,1,"div",15),e.qZA()(),e.TgZ(52,"div",16)(53,"div",17)(54,"a",18),e.NdJ("click",function(){return i.close()}),e._uU(55,"Close"),e.qZA()()()),2&t&&(e.xp6(28),e.Oqu(i.rod.work_number),e.xp6(2),e.Oqu(i.rod.customer.name),e.xp6(2),e.Oqu(i.rod.order_number),e.xp6(2),e.Oqu(i.rod.product.name),e.xp6(2),e.Oqu(i.rod.progress),e.xp6(2),e.Q6J("ngIf",i.rod.delivery_notes_count>1),e.xp6(1),e.Q6J("ngIf",1==i.rod.delivery_notes_count),e.xp6(2),e.Q6J("ngIf",i.rod.attachments.length>1),e.xp6(1),e.Q6J("ngIf",1==i.rod.attachments.length),e.xp6(3),e.Q6J("ngClass",e.VKq(13,w,null!=i.jobDetail)),e.xp6(2),e.Q6J("ngForOf",i.jobNotes),e.xp6(3),e.Q6J("ngForOf",i.jobNotes),e.xp6(1),e.Q6J("ngIf",i.jobDetail))},directives:[u.O5,u.mk,u.sg],pipes:[u.uU],styles:[".timeline-card-main.show-job-note[_ngcontent-%COMP%]{max-width:75%}.job-details-section[_ngcontent-%COMP%]{width:25%;min-width:25%;position:relative;padding-left:10px;border-left:.5px solid #ccc}.job-details-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:#dc0100;text-transform:uppercase}.close-job-details[_ngcontent-%COMP%]{color:inherit;cursor:pointer;position:absolute;right:15px;top:1px;font-size:13px;font-weight:bolder}.job-note-description[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:12px}.job-note-description[_ngcontent-%COMP%]   .timeline-job-note-details[_ngcontent-%COMP%]{font-weight:700}"]}),o})()}}]);
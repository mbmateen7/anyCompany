"use strict";(self.webpackChunkhumphree=self.webpackChunkhumphree||[]).push([[613],{88:(T,g,c)=>{c.d(g,{z:()=>E});var e=c(5e3),u=c(1702),p=c(9634),m=c(629),r=c(9808),h=c(6783);function s(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"i-feather",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),_=o.$implicit,C=o.index;return e.oxw(2).deleteAttachment(_,C)}),e.qZA()}}function f(n,a){if(1&n&&(e.TgZ(0,"div",11)(1,"div",12)(2,"p",13),e._uU(3),e.qZA(),e.TgZ(4,"div")(5,"a",14),e._uU(6,"View"),e.qZA(),e.YNc(7,s,1,0,"i-feather",15),e.qZA()()()),2&n){const t=a.$implicit,i=e.oxw(2);e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("href",t.location,e.LSH),e.xp6(2),e.Q6J("ngIf",i._auth.checkPermissions("rod","write"))}}function l(n,a){if(1&n&&(e.TgZ(0,"div",9),e.YNc(1,f,8,3,"div",10),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.data.attachments)}}function d(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"div",12)(2,"p",13),e._uU(3),e.qZA(),e.TgZ(4,"i-feather",18),e.NdJ("click",function(){const _=e.CHM(t).index;return e.oxw(2).removeAttachment(_)}),e.qZA()()()}if(2&n){const t=a.$implicit;e.xp6(3),e.Oqu(t.name)}}function v(n,a){if(1&n&&(e.TgZ(0,"div",17),e.YNc(1,d,5,1,"div",10),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.attachments)}}function Z(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",19)(2,"label",20),e._UZ(3,"i",21),e._uU(4," Add Attachments "),e.qZA(),e.TgZ(5,"input",22),e.NdJ("change",function(o){return e.CHM(t),e.oxw().addAttachment(o)}),e.qZA()()()}}function P(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().UploadFiles()}),e._uU(1,"Upload"),e.qZA()}}let x=(()=>{class n{constructor(t,i,o){this._rod=t,this.helper=i,this._auth=o,this.type="add",this.response=new e.vpe,this.formData=new FormData,this.attachments=[]}ngOnInit(){}UploadFiles(){this.formData.set("work_order_id",this.data.id),this._rod.uploadProductionSchedule(this.formData).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit({success:!0,data:t.data})})}addAttachment(t){for(let i=0;i<t.target.files.length;i++){const o=t.target.files[i];this.formData.append("attachment[]",o,o.name),null==this.attachments.find(_=>_.name==o.name)&&this.attachments.push(o)}}removeAttachment(t){this.formData.delete("attachment[]"),this.attachments.splice(t,1),this.attachments.forEach(i=>{this.formData.append("attachment[]",i,i.name)})}deleteAttachment(t,i){this._rod.removeProductionSchedule({id:t.id}).subscribe(o=>{this.data.attachments.splice(i,1),this.helper.toastSuccess(o.message)})}cancel(){this.response.emit({success:!1,data:this.data})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.W),e.Y36(p.B),e.Y36(m.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-view-production-schedule"]],inputs:{data:"data",type:"type"},outputs:{response:"response"},decls:12,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],["class","row",4,"ngIf"],["class","row mb-2",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"discard-btn",3,"click"],["href","javascript:void(0) ","class","discard-btn ",3,"click",4,"ngIf"],[1,"row"],["class","col-md-12",4,"ngFor","ngForOf"],[1,"col-md-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"d-inline-flex"],["target","_blank",1,"view-anchor","red",3,"href"],["name","trash","class","icon-width ml-3",3,"click",4,"ngIf"],["name","trash",1,"icon-width","ml-3",3,"click"],[1,"row","mb-2"],["name","trash",1,"icon-width",3,"click"],[1,"col-md-12","d-flex","align-items-center","justify-content-center","w-100"],["for","upload-file","role","button",1,"discard-btn"],[1,"fa","fa-paperclip"],["type","file","id","upload-file","placeholder","Due Date","multiple","","accept","application/pdf, application/vnd.ms-excel, image/*",1,"d-none",3,"change"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Production Schedules"),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,l,2,1,"div",3),e.YNc(5,v,2,1,"div",4),e.YNc(6,Z,6,0,"div",3),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"a",7),e.NdJ("click",function(){return i.cancel()}),e._uU(10,"Close"),e.qZA(),e.YNc(11,P,2,0,"a",8),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngIf","view"==i.type),e.xp6(1),e.Q6J("ngIf","add"==i.type),e.xp6(1),e.Q6J("ngIf","add"==i.type),e.xp6(5),e.Q6J("ngIf","add"==i.type))},directives:[r.O5,r.sg,h.u],styles:[".border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin-top:10px;padding-bottom:5px}.border-bottom[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .border-bottom[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:0}.icon-width[_ngcontent-%COMP%]{height:18px;width:18px}a.view-anchor.red[_ngcontent-%COMP%]{color:#dc0100!important}"]}),n})();var A=c(2313),b=c(9644);function q(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1,"Multiple"),e.qZA()}}function U(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewDeliveryNotes()}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.rod.delivery_notes[0]?null:t.rod.delivery_notes[0].ticket_no)}}function M(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewProductionSchedule()}),e._uU(1," Multiple "),e.qZA()}}function O(n,a){if(1&n&&(e.TgZ(0,"a",23),e._uU(1," View "),e.qZA()),2&n){const t=e.oxw();e.Q6J("href",t.rod.attachments[0].location,e.LSH)}}function k(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().addProductionSchedule()}),e._uU(1," Add "),e.qZA()}}const w=function(n){return{invisible:n}};function y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"li",25)(1,"ul",26)(2,"li",27),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",28),e._uU(5),e.qZA()(),e.TgZ(6,"ul",26)(7,"li",27),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",28),e._uU(10),e.qZA()(),e.TgZ(11,"ul",29)(12,"li",27),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",28)(15,"a",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().jobDetail=o}),e._uU(16," View "),e.qZA()()(),e.TgZ(17,"p",30),e._uU(18),e.ALo(19,"date"),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,w,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function J(n,a){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,y,20,9,"li",24),e.qZA()),2&n){const t=a.index;e.xp6(1),e.Q6J("ngIf",t%2==0)}}function N(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"li",25)(1,"ul",26)(2,"li",27),e._uU(3,"Employees Name"),e.qZA(),e.TgZ(4,"li",28),e._uU(5),e.qZA()(),e.TgZ(6,"ul",26)(7,"li",27),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"li",28),e._uU(10),e.qZA()(),e.TgZ(11,"ul",29)(12,"li",27),e._uU(13,"Job Note"),e.qZA(),e.TgZ(14,"li",28)(15,"a",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().jobDetail=o}),e._uU(16," View "),e.qZA()()(),e.TgZ(17,"p",30),e._uU(18),e.ALo(19,"date"),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.user.name),e.xp6(5),e.Oqu(t.title),e.xp6(1),e.Q6J("ngClass",e.VKq(7,w,!t.description)),e.xp6(7),e.Oqu(e.xi3(19,4,t.created_at,"h:m a | dd MMMM, yyyy"))}}function S(n,a){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,N,20,9,"li",24),e.qZA()),2&n){const t=a.index;e.xp6(1),e.Q6J("ngIf",t%2!=0)}}function j(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",31)(1,"span",32),e.NdJ("click",function(){return e.CHM(t),e.oxw().jobDetail=null}),e._uU(2,"X"),e.qZA(),e.TgZ(3,"h4",33),e._uU(4,"Job Note "),e._UZ(5,"i",34),e.qZA(),e.TgZ(6,"div",35),e._UZ(7,"div",36),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(7),e.Q6J("innerHtml",t.safeHtml(t.jobDetail.description),e.oJD)}}const I=function(n){return{"show-job-note":n}};let E=(()=>{class n{constructor(t,i,o,_){this._rod=t,this.sanitizer=i,this._modal=o,this._auth=_,this.response=new e.vpe,this.jobNotes=[],this.jobDetail=null,this.modalConfig={animated:!0,keyboard:!1,backdrop:!1,ignoreBackdropClick:!0,windowClass:"modal-roles"}}ngOnInit(){this._rod.getTimeline({work_order_id:this.rod.id,timeline:!0}).subscribe(t=>{console.log(t.data),this.jobNotes=t.data})}close(){this.response.emit({success:!1,data:this.rod})}viewDeliveryNotes(){this.response.emit({success:!0})}safeHtml(t){return this.sanitizer.bypassSecurityTrustHtml(t)}viewProductionSchedule(){const t=this._modal.open(x,this.modalConfig);t.componentInstance.data=this.rod,t.componentInstance.type="view",t.componentInstance.response.subscribe(i=>{i.success&&(this.rod=i.data),t.dismiss()})}addProductionSchedule(){const t=this._modal.open(x,this.modalConfig);t.componentInstance.data=this.rod,t.componentInstance.type="add",t.componentInstance.response.subscribe(i=>{i.success&&(this.rod=i.data),t.dismiss()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.W),e.Y36(A.H7),e.Y36(b.FF),e.Y36(m.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-timeline"]],inputs:{rod:"rod"},outputs:{response:"response"},decls:57,vars:16,consts:[[1,"modal-header"],[1,"modal-title"],["type","button ","data-dismiss","modal ",1,"close"],[1,"modal-body"],[1,"timeline-table"],[1,"modal-table","table-responsive"],[1,"table"],["class","view-anchor view-anchor-red",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red","href","javascript:void(0)",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red mr-2","href","javascript:void(0)",3,"click",4,"ngIf"],["class","view-anchor view-anchor-red mr-2","target","_blank",3,"href",4,"ngIf"],[1,"timeline-section","d-flex","justify-content-between"],[1,"timeline-card-main",3,"ngClass"],[1,"cars-time-list"],[4,"ngFor","ngForOf"],[1,"bottom-card-list"],["class","job-details-section",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0) ",1,"add-btn",3,"click"],[1,"view-anchor","view-anchor-red",3,"click"],["href","javascript:void(0)",1,"view-anchor","view-anchor-red",3,"click"],["href","javascript:void(0)",1,"view-anchor","view-anchor-red","mr-2",3,"click"],["target","_blank",1,"view-anchor","view-anchor-red","mr-2",3,"href"],["class","card-timeline",4,"ngIf"],[1,"card-timeline"],[1,"card-ul-timeline"],[1,"timeline-name-heading"],[1,"timeline-name"],[1,"card-ul-timeline",3,"ngClass"],[1,"date-center"],[1,"job-details-section"],[1,"close-job-details",3,"click"],[1,"title"],[1,"bi","bi-arrow-right"],[1,"job-note-description"],[3,"innerHtml"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"TIMELINE"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"\xd7"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"table",6)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Work#"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Customer"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Order#"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Product"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Progress"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Deliver Note"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Production Schedule"),e.qZA()()(),e.TgZ(25,"tbody")(26,"tr")(27,"td"),e._uU(28),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.qZA(),e.TgZ(33,"td"),e._uU(34),e.qZA(),e.TgZ(35,"td"),e._uU(36),e.qZA(),e.TgZ(37,"td"),e.YNc(38,q,2,0,"a",7),e.YNc(39,U,2,1,"a",8),e.qZA(),e.TgZ(40,"td"),e.YNc(41,M,2,0,"a",9),e.YNc(42,O,2,1,"a",10),e.YNc(43,k,2,0,"a",7),e.qZA(),e._UZ(44,"td"),e.qZA()()()()(),e.TgZ(45,"div",11)(46,"div",12)(47,"ul",13),e.YNc(48,J,2,1,"div",14),e.qZA(),e.TgZ(49,"div",15)(50,"ul",13),e.YNc(51,S,2,1,"div",14),e.qZA()()(),e.YNc(52,j,8,1,"div",16),e.qZA()(),e.TgZ(53,"div",17)(54,"div",18)(55,"a",19),e.NdJ("click",function(){return i.close()}),e._uU(56,"Close"),e.qZA()()()),2&t&&(e.xp6(28),e.Oqu(i.rod.work_number),e.xp6(2),e.Oqu(i.rod.customer.name),e.xp6(2),e.Oqu(i.rod.order_number),e.xp6(2),e.Oqu(i.rod.product.name),e.xp6(2),e.Oqu(i.rod.progress),e.xp6(2),e.Q6J("ngIf",i.rod.delivery_notes_count>1),e.xp6(1),e.Q6J("ngIf",1==i.rod.delivery_notes_count),e.xp6(2),e.Q6J("ngIf",i.rod.attachments.length>1),e.xp6(1),e.Q6J("ngIf",1==i.rod.attachments.length),e.xp6(1),e.Q6J("ngIf",i._auth.checkPermissions("rod","write")||i._auth.checkPermissions("delivery_list","write")),e.xp6(3),e.Q6J("ngClass",e.VKq(14,I,null!=i.jobDetail)),e.xp6(2),e.Q6J("ngForOf",i.jobNotes),e.xp6(3),e.Q6J("ngForOf",i.jobNotes),e.xp6(1),e.Q6J("ngIf",i.jobDetail))},directives:[r.O5,r.mk,r.sg],pipes:[r.uU],styles:[".timeline-card-main.show-job-note[_ngcontent-%COMP%]{max-width:75%}.job-details-section[_ngcontent-%COMP%]{width:25%;min-width:25%;position:relative;padding-left:10px;border-left:.5px solid #ccc}.job-details-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:#dc0100;text-transform:uppercase}.close-job-details[_ngcontent-%COMP%]{color:inherit;cursor:pointer;position:absolute;right:15px;top:1px;font-size:13px;font-weight:bolder}.job-note-description[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:12px}.job-note-description[_ngcontent-%COMP%]   .timeline-job-note-details[_ngcontent-%COMP%]{font-weight:700}"]}),n})()},8601:(T,g,c)=>{c.d(g,{Q:()=>h});var e=c(5e3),u=c(4182),p=c(9808);function m(s,f){if(1&s&&(e.TgZ(0,"div",20)(1,"h4"),e._uU(2),e.qZA()()),2&s){const l=e.oxw();e.xp6(2),e.lnq("Showing ",l.from," - ",l.to," of ",l.total,"")}}const r=function(s){return{disabled:s}};let h=(()=>{class s{constructor(){this.totalPages=1,this.currentPage=1,this.pageSize=10,this.from=1,this.to=10,this.total=10,this.changePage=new e.vpe,this.ChangePageSize=new e.vpe}ngOnInit(){}nextPage(){this.currentPage!=this.totalPages&&(this.currentPage++,this.changePage.emit(this.currentPage))}prevPage(){1!=this.currentPage&&(this.currentPage--,this.changePage.emit(this.currentPage))}pageSizeUpdate(l){this.pageSize=l.target.value,this.ChangePageSize.emit(this.pageSize)}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-pagination"]],inputs:{totalPages:"totalPages",currentPage:"currentPage",pageSize:"pageSize",from:"from",to:"to",total:"total"},outputs:{changePage:"changePage",ChangePageSize:"ChangePageSize"},decls:29,vars:9,consts:[[1,"d-flex","align-items-center","justify-content-end","mr-2","mt-2","pagination"],[1,"d-flex","rows-per"],[1,"row-heading"],[1,"select-box"],[1,"arrow-design"],[1,"form-control","bulk-select-status",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","30"],["value","50"],["class","d-flex align-items-center mr-3 justify-content-center",4,"ngIf"],[1,"pagination-ctm","d-inline-block"],[1,"item"],["href","javascript:void(0)",1,"page-arow-l",3,"ngClass","click"],["aria-hidden","true",1,"fa","fa-angle-left"],[1,"my-pagination","d-inline-block"],["href","javascript:void(0)",1,"link"],["href","javascript:void(0)","role","button",1,"page-arow-l",3,"ngClass","click"],["aria-hidden","true",1,"fa","fa-angle-right"],[1,"d-flex","align-items-center","mr-3","justify-content-center"]],template:function(l,d){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Rows per page:"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"select",5),e.NdJ("ngModelChange",function(Z){return d.pageSize=Z})("change",function(Z){return d.pageSizeUpdate(Z)}),e.TgZ(7,"option",6),e._uU(8,"5"),e.qZA(),e.TgZ(9,"option",7),e._uU(10,"10"),e.qZA(),e.TgZ(11,"option",8),e._uU(12,"20"),e.qZA(),e.TgZ(13,"option",9),e._uU(14,"30"),e.qZA(),e.TgZ(15,"option",10),e._uU(16,"50"),e.qZA()()()()(),e.YNc(17,m,3,3,"div",11),e.TgZ(18,"div",12)(19,"li",13)(20,"a",14),e.NdJ("click",function(){return d.prevPage()}),e._UZ(21,"i",15),e.qZA()(),e.TgZ(22,"ul",16)(23,"li",13)(24,"a",17),e._uU(25),e.qZA()()(),e.TgZ(26,"li",13)(27,"a",18),e.NdJ("click",function(){return d.nextPage()}),e._UZ(28,"i",19),e.qZA()()()()),2&l&&(e.xp6(6),e.Q6J("ngModel",d.pageSize),e.xp6(11),e.Q6J("ngIf",d.from),e.xp6(3),e.Q6J("ngClass",e.VKq(5,r,1==d.currentPage)),e.xp6(5),e.Oqu(d.currentPage),e.xp6(2),e.Q6J("ngClass",e.VKq(7,r,d.currentPage==d.totalPages)))},directives:[u.EJ,u.JJ,u.On,u.YN,u.Kr,p.O5,p.mk],styles:[".pagination[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .arrow-design[_ngcontent-%COMP%]{width:auto}.pagination[_ngcontent-%COMP%]   .row-heading[_ngcontent-%COMP%]{white-space:nowrap}.disabled[_ngcontent-%COMP%]:hover{opacity:.7;cursor:not-allowed;background:#14274E1A;color:#656565}"]}),s})()},9618:(T,g,c)=>{c.d(g,{m:()=>m});var e=c(9808),u=c(4182),p=c(5e3);let m=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[[e.ez,u.u5]]}),r})()}}]);
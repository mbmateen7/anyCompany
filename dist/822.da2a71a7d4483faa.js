"use strict";(self.webpackChunkhumphree=self.webpackChunkhumphree||[]).push([[822],{8601:(x,v,c)=>{c.d(v,{Q:()=>l});var s=c(5e3),_=c(4182),e=c(9808);function f(u,d){if(1&u&&(s.TgZ(0,"div",21)(1,"h4"),s._uU(2),s.qZA()()),2&u){const h=s.oxw();s.xp6(2),s.lnq("Showing ",h.from," - ",h.to," of ",h.total,"")}}const m=function(u){return{disabled:u}};let l=(()=>{class u{constructor(){this.totalPages=1,this.currentPage=1,this.pageSize=10,this.from=1,this.to=10,this.total=10,this.changePage=new s.vpe,this.ChangePageSize=new s.vpe}ngOnInit(){}nextPage(){this.currentPage!=this.totalPages&&(this.currentPage++,this.changePage.emit(this.currentPage))}prevPage(){1!=this.currentPage&&(this.currentPage--,this.changePage.emit(this.currentPage))}pageSizeUpdate(h){this.pageSize=h.target.value,this.ChangePageSize.emit(this.pageSize)}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-pagination"]],inputs:{totalPages:"totalPages",currentPage:"currentPage",pageSize:"pageSize",from:"from",to:"to",total:"total"},outputs:{changePage:"changePage",ChangePageSize:"ChangePageSize"},decls:31,vars:10,consts:[[1,"d-flex","align-items-center","justify-content-end","mr-2","mt-2","pagination"],[1,"d-flex","rows-per"],[1,"row-heading"],[1,"select-box"],[1,"arrow-design"],[1,"form-control","bulk-select-status",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","30"],["value","50"],[3,"value"],["class","d-flex align-items-center mr-3 justify-content-center",4,"ngIf"],[1,"pagination-ctm","d-inline-block"],[1,"item"],["href","javascript:void(0)",1,"page-arow-l",3,"ngClass","click"],["aria-hidden","true",1,"fa","fa-angle-left"],[1,"my-pagination","d-inline-block"],["href","javascript:void(0)",1,"link"],["href","javascript:void(0)","role","button",1,"page-arow-l",3,"ngClass","click"],["aria-hidden","true",1,"fa","fa-angle-right"],[1,"d-flex","align-items-center","mr-3","justify-content-center"]],template:function(h,g){1&h&&(s.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),s._uU(3,"Rows per page:"),s.qZA(),s.TgZ(4,"div",3)(5,"div",4)(6,"select",5),s.NdJ("ngModelChange",function(C){return g.pageSize=C})("change",function(C){return g.pageSizeUpdate(C)}),s.TgZ(7,"option",6),s._uU(8,"5"),s.qZA(),s.TgZ(9,"option",7),s._uU(10,"10"),s.qZA(),s.TgZ(11,"option",8),s._uU(12,"20"),s.qZA(),s.TgZ(13,"option",9),s._uU(14,"30"),s.qZA(),s.TgZ(15,"option",10),s._uU(16,"50"),s.qZA(),s.TgZ(17,"option",11),s._uU(18,"All"),s.qZA()()()()(),s.YNc(19,f,3,3,"div",12),s.TgZ(20,"div",13)(21,"li",14)(22,"a",15),s.NdJ("click",function(){return g.prevPage()}),s._UZ(23,"i",16),s.qZA()(),s.TgZ(24,"ul",17)(25,"li",14)(26,"a",18),s._uU(27),s.qZA()()(),s.TgZ(28,"li",14)(29,"a",19),s.NdJ("click",function(){return g.nextPage()}),s._UZ(30,"i",20),s.qZA()()()()),2&h&&(s.xp6(6),s.Q6J("ngModel",g.pageSize),s.xp6(11),s.s9C("value",g.total),s.xp6(2),s.Q6J("ngIf",g.from),s.xp6(3),s.Q6J("ngClass",s.VKq(6,m,1==g.currentPage)),s.xp6(5),s.Oqu(g.currentPage),s.xp6(2),s.Q6J("ngClass",s.VKq(8,m,g.currentPage==g.totalPages)))},directives:[_.EJ,_.JJ,_.On,_.YN,_.Kr,e.O5,e.mk],styles:[".pagination[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .arrow-design[_ngcontent-%COMP%]{width:auto}.pagination[_ngcontent-%COMP%]   .row-heading[_ngcontent-%COMP%]{white-space:nowrap}.disabled[_ngcontent-%COMP%]:hover{opacity:.7;cursor:not-allowed;background:#14274E1A;color:#656565}"]}),u})()},3822:(x,v,c)=>{c.r(v),c.d(v,{AdministrationModule:()=>de});var s=c(9808),_=c(7587),e=c(5e3),f=c(9634),m=c(1628),l=c(4182);function u(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"ADD ROLE"),e.qZA())}function d(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"EDIT ROLE"),e.qZA())}function h(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"DELETE ROLE"),e.qZA())}function g(n,o){if(1&n&&(e.TgZ(0,"p",23),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.title)}}function Z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",24)(1,"label",25)(2,"input",26),e.NdJ("ngModelChange",function(a){return e.CHM(t).$implicit.action[1]=a}),e.qZA(),e._UZ(3,"span",27),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(2),e.Q6J("checked",t.action[1])("ngModel",t.action[1])}}function C(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",24)(1,"label",25)(2,"input",26),e.NdJ("ngModelChange",function(a){return e.CHM(t).$implicit.action[2]=a}),e.qZA(),e._UZ(3,"span",27),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(2),e.Q6J("checked",t.action[2])("ngModel",t.action[2])}}function M(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10)(2,"label",11),e._uU(3,"Name"),e.TgZ(4,"span",12),e._uU(5,"*"),e.qZA()(),e.TgZ(6,"input",13),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().role.title=a}),e.qZA()(),e.TgZ(7,"div",14)(8,"div",15)(9,"p",16),e._uU(10,"Premissions"),e.qZA(),e.YNc(11,g,2,1,"p",17),e.qZA(),e.TgZ(12,"div",18)(13,"div",19)(14,"p",20),e._uU(15,"Read"),e.qZA(),e.YNc(16,Z,4,2,"div",21),e.qZA(),e.TgZ(17,"div",22)(18,"p",16),e._uU(19,"Write"),e.qZA(),e.YNc(20,C,4,2,"div",21),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.role.title),e.xp6(5),e.Q6J("ngForOf",t.role.permissions),e.xp6(5),e.Q6J("ngForOf",t.role.permissions),e.xp6(4),e.Q6J("ngForOf",t.role.permissions)}}function P(n,o){1&n&&(e.TgZ(0,"div",9)(1,"h3",28),e._uU(2,"Are you sure you want to delete this role?"),e.qZA()())}function k(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e._uU(1,"Add"),e.qZA()}}function J(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().update()}),e._uU(1,"Update"),e.qZA()}}function q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteRole()}),e._uU(1,"Confirm"),e.qZA()}}let y=(()=>{class n{constructor(t,i){this.helper=t,this._administration=i,this.response=new e.vpe}ngOnInit(){var t;console.log("Role",this.role.permissions),localStorage.getItem("permissionsList")?(null===(t=this.role)||void 0===t?void 0:t.permissions)||(this.role.permissions=JSON.parse(localStorage.getItem("permissionsList"))):this._administration.getPermissionsList().subscribe(i=>{this.role.permissions=i.data,localStorage.setItem("permissionsList",JSON.stringify(i.data))})}cancel(){this.response.emit({success:!1})}add(){this.validateForm()&&this._administration.addRole(this.role).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit(t)})}deleteRole(){this._administration.deleteRole({id:this.role.id}).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit({success:!0,delete:!0})})}update(){this.validateForm()&&this._administration.updateRole(this.role).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit(t)})}validateForm(){var t;return!!(null===(t=this.role.title)||void 0===t?void 0:t.length)||(this.helper.toastError("Role name is required"),!1)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.B),e.Y36(m.E))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-edit-roles"]],inputs:{role:"role",type:"type"},outputs:{response:"response"},decls:15,vars:8,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["type","button","data-dismiss","modal",1,"close"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0)",1,"discard-btn",3,"click"],["href","javascript:void(0)","class","add-btn",3,"click",4,"ngIf"],[1,"modal-title"],[1,"modal-body"],[1,"input-style"],[1,"d-block"],[1,"text-danger"],["type","text","placeholder","Accounts","name","title",1,"ctm-input",3,"ngModel","ngModelChange"],[1,"add-role-new-design"],[1,"permission-feature-column"],[1,"permission"],["class","status-f",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"read-checkbox"],[1,"permission","permission-right"],["class","remember-me",4,"ngFor","ngForOf"],[1,"write-checkbox"],[1,"status-f"],[1,"remember-me"],[1,"custom-check","custom-check-r"],["type","checkbox",3,"checked","ngModel","ngModelChange"],[1,"checkmark"],[1,"text-center"],["href","javascript:void(0)",1,"add-btn",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,u,2,0,"h4",1),e.YNc(2,d,2,0,"h4",1),e.YNc(3,h,2,0,"h4",1),e.TgZ(4,"button",2),e._uU(5,"\xd7"),e.qZA()(),e.YNc(6,M,21,4,"div",3),e.YNc(7,P,3,0,"div",3),e.TgZ(8,"div",4)(9,"div",5)(10,"a",6),e.NdJ("click",function(){return i.cancel()}),e._uU(11,"Cancel"),e.qZA(),e.YNc(12,k,2,0,"a",7),e.YNc(13,J,2,0,"a",7),e.YNc(14,q,2,0,"a",7),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf","add"==i.type),e.xp6(1),e.Q6J("ngIf","edit"==i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type),e.xp6(3),e.Q6J("ngIf","delete"!=i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type),e.xp6(5),e.Q6J("ngIf","add"==i.type),e.xp6(1),e.Q6J("ngIf","edit"==i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type))},directives:[s.O5,l.Fj,l.JJ,l.On,s.sg,l.Wl],styles:[""]}),n})();var U=c(9644),b=c(629),T=c(6783);function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().addRole()}),e._UZ(1,"i-feather",18),e._uU(2," New Role "),e.qZA()}}function N(n,o){1&n&&(e.TgZ(0,"th"),e._uU(1,"Action"),e.qZA())}function w(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"td")(1,"div",19)(2,"div",20)(3,"i-feather",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(),r=a.$implicit,p=a.index;return e.oxw().roleAction(r,"edit",p)}),e.qZA(),e.TgZ(4,"i-feather",22),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(),r=a.$implicit,p=a.index;return e.oxw().roleAction(r,"delete",p)}),e.qZA()()()()}}function I(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.YNc(5,w,5,0,"td",14),e.qZA()),2&n){const t=o.$implicit,i=e.oxw();e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.title),e.xp6(1),e.Q6J("ngIf",i._auth.checkPermissions("administration","write"))}}let O=(()=>{class n{constructor(t,i,a){this._administration=t,this._modal=i,this._auth=a,this.roles=[],this.search="",this.modalConfig={animated:!0,keyboard:!1,backdrop:!1,ignoreBackdropClick:!0,windowClass:"modal-roles"}}ngOnInit(){this.getRoles()}getRoles(){this._administration.rolesListing({search:this.search}).subscribe(t=>{this.roles=t.data})}roleAction(t,i,a){const r=this._modal.open(y,this.modalConfig);r.componentInstance.role=Object.assign({},t),r.componentInstance.type=i,r.componentInstance.response.subscribe(p=>{p.success&&this.getRoles(),r.close()})}addRole(){const t=this._modal.open(y,this.modalConfig);t.componentInstance.role={},t.componentInstance.type="add",t.componentInstance.response.subscribe(i=>{i.success&&this.getRoles(),t.close()})}searchRole(){(this.search.length>=3||0==this.search.length)&&this.getRoles()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.E),e.Y36(U.FF),e.Y36(b.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-roles"]],decls:26,vars:4,consts:[[1,"dashboard-main"],[1,"dashboard-content"],[1,"d-flex","align-items-center","mb-16","justify-content-between","mr-70"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)",1,"breadcrumb-link"],["class","secondary-sup","href","javascript:void(0)",3,"click",4,"ngIf"],[1,"roles-main"],[1,"form-group","sear-bar-roles","position-relative","mb-0"],["type","search","placeholder","Search..","id","email",1,"form-control","form-control-roles",3,"ngModel","input","ngModelChange"],["name","search",1,"search-ctm"],[1,"tables-roles-main"],[1,"table"],[1,"thead-ctm"],[4,"ngIf"],[1,"t-body-ctm"],[4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"secondary-sup",3,"click"],["name","plus",1,"plus"],[1,"select-box"],[1,"input-style","form-group"],["name","edit-3",1,"mr-2",3,"click"],["name","trash",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),e._uU(6,"Adminstraion"),e.qZA()(),e.TgZ(7,"li",4)(8,"a",5),e._uU(9,"Roles"),e.qZA()()(),e.YNc(10,R,3,0,"a",6),e.qZA(),e.TgZ(11,"div",7)(12,"div",8)(13,"input",9),e.NdJ("input",function(){return i.searchRole()})("ngModelChange",function(r){return i.search=r}),e.qZA(),e._UZ(14,"i-feather",10),e.qZA(),e.TgZ(15,"div",11)(16,"table",12)(17,"thead",13)(18,"tr")(19,"th"),e._uU(20,"#"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Role name"),e.qZA(),e.YNc(23,N,2,0,"th",14),e.qZA()(),e.TgZ(24,"tbody",15),e.YNc(25,I,6,3,"tr",16),e.qZA()()()()()()),2&t&&(e.xp6(10),e.Q6J("ngIf",i._auth.checkPermissions("administration","write")),e.xp6(3),e.Q6J("ngModel",i.search),e.xp6(10),e.Q6J("ngIf",i._auth.checkPermissions("administration","write")),e.xp6(2),e.Q6J("ngForOf",i.roles))},directives:[s.O5,T.u,l.Fj,l.JJ,l.On,s.sg],styles:[""]}),n})();function S(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"span",28),e._uU(1),e.TgZ(2,"span")(3,"i-feather",29),e.NdJ("click",function(){const r=e.CHM(t).index;return e.oxw(2).removeRecipient(r)}),e.qZA()()()}if(2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",t," ")}}function F(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"a",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).update()}),e._uU(3," Update "),e.qZA()()()}}function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"h4",12),e._uU(4,"Blacklist Email"),e.qZA()(),e.TgZ(5,"div",13)(6,"div",14)(7,"label",15)(8,"input",16),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().settings.blacklist_email_enabled=a}),e.qZA(),e._UZ(9,"span",17),e.qZA()()()(),e.TgZ(10,"div",10)(11,"div",11)(12,"h4",18),e._uU(13,"Email Recipients "),e.TgZ(14,"span",19),e._uU(15,"(press enter to add)"),e.qZA()()(),e.TgZ(16,"div",20)(17,"div",21)(18,"label",22),e._uU(19,"An email will be send to "),e.TgZ(20,"span",23),e._uU(21,"scott@humphreystretton.com"),e.qZA(),e._uU(22,". Below you can add CC for blacklist orders"),e.qZA(),e.TgZ(23,"input",24),e.NdJ("keyup",function(a){return e.CHM(t),e.oxw().addRecipient(a)}),e.qZA(),e.TgZ(24,"div",25),e.YNc(25,S,4,1,"span",26),e.qZA()()()(),e.YNc(26,F,4,0,"div",27),e.qZA()}if(2&n){const t=e.oxw();e.xp6(8),e.Q6J("ngModel",t.settings.blacklist_email_enabled),e.xp6(17),e.Q6J("ngForOf",t.settings.blacklist_email_recipients),e.xp6(1),e.Q6J("ngIf",t._auth.checkPermissions("administration","write"))}}let Y=(()=>{class n{constructor(t,i,a){this._administration=t,this._auth=i,this.helper=a}ngOnInit(){this.getAdminSettings()}getAdminSettings(){this._administration.getSettings().subscribe(t=>{this.settings=t.data})}update(){this._administration.updateSettings(this.settings).subscribe(t=>{this.helper.toastSuccess(t.message),this.settings=t.data})}addRecipient(t){console.log(t.keyCode),13==t.keyCode&&(this.settings.blacklist_email_recipients.push(t.target.value),t.target.value="")}removeRecipient(t){this.settings.blacklist_email_recipients.splice(t,1)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.E),e.Y36(b.e),e.Y36(f.B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],decls:12,vars:1,consts:[[1,"dashboard-main"],[1,"dashboard-content"],[1,"d-flex","align-items-center","mb-16","justify-content-between","mr-70"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)",1,"breadcrumb-link"],["href","javascript:void(0)",1,"breadcrumb-link","active"],[1,"tables-roles-main"],["class","roles-main p-3",4,"ngIf"],[1,"roles-main","p-3"],[1,"row","mb-3"],[1,"col-sm-3"],["for","blacklist_enabled"],[1,"col-sm-9"],[1,"remember-me"],[1,"custom-check","custom-check-r"],["type","checkbox","checked","checked",3,"ngModel","ngModelChange"],[1,"checkmark"],[1,"mt-2"],[1,"small"],[1,"col-sm-6"],[1,"input-style","mb-2"],[1,"my-0",2,"font-size","1rem","font-weight","normal","margin-left","5px"],[1,"text-red",2,"font-size","1rem","font-weight","normal"],["type","email","placeholder","email address",1,"ctm-input","type-input",3,"keyup"],[1,"d-flex","flex-wrap"],["class","fiels-ctm","style","font-size:12px;",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"fiels-ctm",2,"font-size","12px"],["name","plus",1,"plus-rotate",3,"click"],[1,"row"],[1,"col","justify-content-end","d-flex","align-items-center"],["href","javascript:void(0)",1,"secondary-sup",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),e._uU(6,"Adminstraion"),e.qZA()(),e.TgZ(7,"li",4)(8,"a",6),e._uU(9,"Settings"),e.qZA()()()(),e.TgZ(10,"div",7),e.YNc(11,Q,27,3,"div",8),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("ngIf",i.settings))},directives:[s.O5,l.Wl,l.JJ,l.On,s.sg,T.u],styles:[""]}),n})();function j(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"ADD USER"),e.qZA())}function z(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"EDIT USER"),e.qZA())}function L(n,o){1&n&&(e.TgZ(0,"h4",8),e._uU(1,"DELETE USER"),e.qZA())}function D(n,o){1&n&&(e.TgZ(0,"div",10)(1,"label",11),e._uU(2,"Password"),e.TgZ(3,"span",12),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"div",22)(6,"h5"),e._uU(7,"A system generated password will be sent to this user which user can change later."),e.qZA()()())}function $(n,o){if(1&n&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&n){const t=o.$implicit,i=e.oxw(2);e.Q6J("value",t.id)("selected",i.user.role_id==t.id),e.xp6(1),e.Oqu(t.title)}}function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10)(2,"label",11),e._uU(3,"Name"),e.TgZ(4,"span",12),e._uU(5,"*"),e.qZA()(),e.TgZ(6,"input",13),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().user.name=a}),e.qZA()(),e.TgZ(7,"div",10)(8,"label",11),e._uU(9,"Email"),e.TgZ(10,"span",12),e._uU(11,"*"),e.qZA()(),e.TgZ(12,"input",14),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().user.email=a}),e.qZA()(),e.YNc(13,D,8,0,"div",15),e.TgZ(14,"div",16)(15,"div",17)(16,"label",11),e._uU(17,"Role"),e.TgZ(18,"span",12),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"div",18)(21,"select",19),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().user.role_id=a}),e.TgZ(22,"option",20),e._uU(23,"Select Role"),e.qZA(),e.YNc(24,$,2,3,"option",21),e.qZA()()()()()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.user.name),e.xp6(6),e.Q6J("ngModel",t.user.email),e.xp6(1),e.Q6J("ngIf","add"==t.type),e.xp6(8),e.Q6J("ngModel",t.user.role_id),e.xp6(3),e.Q6J("ngForOf",t.roles)}}function B(n,o){1&n&&(e.TgZ(0,"div",9)(1,"h3",24),e._uU(2,"Are you sure you want to delete this user?"),e.qZA()())}function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e._uU(1,"Add"),e.qZA()}}function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().update()}),e._uU(1,"Update"),e.qZA()}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteUser()}),e._uU(1,"Confirm"),e.qZA()}}let E=(()=>{class n{constructor(t,i){this.helper=t,this._administration=i,this.response=new e.vpe}ngOnInit(){console.log(this.user,this.type,this.roles),this.user.role_id=0}cancel(){this.response.emit({success:!1})}add(){this.validateForm()&&this._administration.addUser(this.user).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit(t)})}deleteUser(){this._administration.deleteUser({id:this.user.id}).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit({success:!0,delete:!0})})}update(){this.validateForm()&&this._administration.updateUser(this.user).subscribe(t=>{this.helper.toastSuccess(t.message),this.response.emit(t)})}validateForm(){var t,i;return(null===(t=this.user.name)||void 0===t?void 0:t.length)?this.user.name.length<3?(this.helper.toastError("Name must be of atleast 3 characters"),!1):(null===(i=this.user.email)||void 0===i?void 0:i.length)?this.helper.validateEmailAddress(this.user.email)?0!=this.user.role_id||(this.helper.toastError("Role is required"),!1):(this.helper.toastError("Please enter a valid email address"),!1):(this.helper.toastError("Email is required"),!1):(this.helper.toastError("Name is required"),!1)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.B),e.Y36(m.E))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-edit-user"]],inputs:{user:"user",type:"type",roles:"roles"},outputs:{response:"response"},decls:15,vars:8,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["type","button","data-dismiss","modal",1,"close"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],[1,"d-flex","align-items-center","justify-content-center","w-100"],["href","javascript:void(0)",1,"discard-btn",3,"click"],["href","javascript:void(0)","class","add-btn",3,"click",4,"ngIf"],[1,"modal-title"],[1,"modal-body"],[1,"input-style","mb-2"],[1,"d-block"],[1,"text-danger"],["type","text","placeholder","Muhammad","name","name",1,"ctm-input",3,"ngModel","ngModelChange"],["type","email","placeholder","abc@mail.com","name","email",1,"ctm-input",3,"ngModel","ngModelChange"],["class","input-style mb-2",4,"ngIf"],[1,"select-box"],[1,"input-style","form-group"],[1,"arrow-design"],["placeholder","Change Action",1,"form-control",3,"ngModel","ngModelChange"],["value","0","selected",""],[3,"value","selected",4,"ngFor","ngForOf"],[1,"type-pass"],[3,"value","selected"],[1,"text-center"],["href","javascript:void(0)",1,"add-btn",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,j,2,0,"h4",1),e.YNc(2,z,2,0,"h4",1),e.YNc(3,L,2,0,"h4",1),e.TgZ(4,"button",2),e._uU(5,"\xd7"),e.qZA()(),e.YNc(6,H,25,5,"div",3),e.YNc(7,B,3,0,"div",3),e.TgZ(8,"div",4)(9,"div",5)(10,"a",6),e.NdJ("click",function(){return i.cancel()}),e._uU(11,"Cancel"),e.qZA(),e.YNc(12,K,2,0,"a",7),e.YNc(13,W,2,0,"a",7),e.YNc(14,X,2,0,"a",7),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf","add"==i.type),e.xp6(1),e.Q6J("ngIf","edit"==i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type),e.xp6(3),e.Q6J("ngIf","delete"!=i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type),e.xp6(5),e.Q6J("ngIf","add"==i.type),e.xp6(1),e.Q6J("ngIf","edit"==i.type),e.xp6(1),e.Q6J("ngIf","delete"==i.type))},directives:[s.O5,l.Fj,l.JJ,l.On,l.EJ,l.YN,l.Kr,s.sg],styles:["select.form-control[_ngcontent-%COMP%]{width:100%;padding:2px 5.5rem 2px 2rem;height:5.5rem}.select-box[_ngcontent-%COMP%]   .arrow-design[_ngcontent-%COMP%]{width:100%;height:auto!important}"]}),n})();var V=c(8601);function G(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().addUser()}),e._UZ(1,"i-feather",20),e._uU(2," New User "),e.qZA()}}function ee(n,o){1&n&&(e.TgZ(0,"th")(1,"p",15),e._uU(2,"Action"),e.qZA()())}function te(n,o){if(1&n&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&n){const t=o.$implicit,i=e.oxw().$implicit;e.Q6J("value",t.id)("selected",i.role_id==t.id),e.xp6(1),e.Oqu(t.title)}}function ne(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"td")(1,"div",23)(2,"div",24)(3,"i-feather",33),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(),r=a.$implicit,p=a.index;return e.oxw(2).userAction(r,"edit",p)}),e.qZA(),e.TgZ(4,"i-feather",34),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(),r=a.$implicit,p=a.index;return e.oxw(2).userAction(r,"delete",p)}),e.qZA()()()()}}const ie=function(n){return{disabled:n}};function se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"div",23)(9,"div",24)(10,"div",25)(11,"select",26),e.NdJ("change",function(a){const r=e.CHM(t),p=r.$implicit,A=r.index;return e.oxw(2).updateRole(p,a,A)}),e.YNc(12,te,2,3,"option",27),e.qZA()()()()(),e.TgZ(13,"td")(14,"div",28)(15,"label",29)(16,"input",30),e.NdJ("change",function(){const r=e.CHM(t).$implicit;return e.oxw(2).updateUserStatus(r)}),e.qZA(),e._UZ(17,"span",31),e.qZA()()(),e.YNc(18,ne,5,0,"td",16),e.qZA()}if(2&n){const t=o.$implicit,i=e.oxw(2);e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(5),e.Q6J("disabled",!i._auth.checkPermissions("administration","write")),e.xp6(1),e.Q6J("ngForOf",i.roles),e.xp6(3),e.Q6J("ngClass",e.VKq(9,ie,t.id!=i.currentUser.id)),e.xp6(1),e.Q6J("checked",t.status)("disabled",!i._auth.checkPermissions("administration","write")),e.xp6(2),e.Q6J("ngIf",i._auth.checkPermissions("administration","write"))}}function oe(n,o){if(1&n&&(e.TgZ(0,"tbody",21),e.YNc(1,se,19,11,"tr",22),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.users)}}const ae=[{path:"",redirectTo:"users"},{path:"roles",component:O},{path:"users",component:(()=>{class n{constructor(t,i,a,r){this._administration=t,this.helper=i,this._modal=a,this._auth=r,this.users=[],this.roles=[],this.searchParams={search:"",page_size:10,page:1},this.pageFrom=1,this.pageTo=10,this.totalCount=10,this.isLoading=!0,this.modalConfig={animated:!0,keyboard:!1,backdrop:!1,ignoreBackdropClick:!0,windowClass:"modal-roles"},this.currentUser=null,this.currentUser=this._auth.currentUserValue}ngOnInit(){this.getAllUsers(),this.getRoles()}getAllUsers(){this._administration.usersListing(this.searchParams).subscribe(t=>{this.users=t.data.data,this.searchParams.page_size=t.data.per_page,this.searchParams.page=t.data.current_page,this.totalPages=t.data.last_page,this.pageFrom=t.data.from,this.pageTo=t.data.to,this.totalCount=t.data.total})}getRoles(){this._administration.rolesListing().subscribe(t=>{this.roles=t.data,this.isLoading=!1})}updateRole(t,i,a){console.log(t,i.target.value),this._administration.updateUser({role_id:i.target.value,id:t.id,name:t.name}).subscribe(p=>{this.users[a]=p.data,this.helper.toastSuccess(p.message)})}userAction(t,i,a){const r=this._modal.open(E,this.modalConfig);r.componentInstance.user=Object.assign({},t),r.componentInstance.type=i,r.componentInstance.roles=this.roles,r.componentInstance.response.subscribe(p=>{p.success&&(p.delete?this.users.splice(a,1):this.users[a]=p.data),r.close()})}updateUserStatus(t){t.status=!t.status,this._administration.updateUser(t).subscribe(i=>{t.status=i.data.status})}addUser(){const t=this._modal.open(E,this.modalConfig);t.componentInstance.user={},t.componentInstance.type="add",t.componentInstance.roles=this.roles,t.componentInstance.response.subscribe(i=>{i.success&&this.getAllUsers(),t.close()})}searchUser(){(this.searchParams.search.length>=3||0==this.searchParams.search.length)&&this.getAllUsers()}changePage(t){this.searchParams.page=t,this.getAllUsers()}ChangePageSize(t){this.searchParams.page=1,this.searchParams.page_size=t,this.getAllUsers()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.E),e.Y36(f.B),e.Y36(U.FF),e.Y36(b.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users"]],decls:37,vars:9,consts:[[1,"dashboard-main"],[1,"dashboard-content"],[1,"d-flex","align-items-center","mb-16","justify-content-between","mr-70"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)",1,"breadcrumb-link"],["href","javascript:void(0)",1,"breadcrumb-link","active"],["class","secondary-sup","href","javascript:void(0)",3,"click",4,"ngIf"],[1,"roles-main"],[1,"form-group","sear-bar-roles","position-relative","mb-0"],["type","search","placeholder","Search..","id","email",1,"form-control","form-control-roles",3,"ngModel","input","ngModelChange"],["name","search",1,"search-ctm"],[1,"tables-roles-main","tables-users-main"],[1,"table"],[1,"thead-ctm"],[1,"inner-cell"],[4,"ngIf"],["class","t-body-ctm",4,"ngIf"],[3,"from","to","pageSize","totalPages","total","changePage","ChangePageSize"],["href","javascript:void(0)",1,"secondary-sup",3,"click"],["name","plus",1,"plus"],[1,"t-body-ctm"],[4,"ngFor","ngForOf"],[1,"select-box","d-flex","justify-content-center"],[1,"input-style","form-group"],[1,"arrow-design"],[1,"form-control",3,"disabled","change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"inner-cell","custom-box","d-flex","justify-content-center"],[1,"switch",3,"ngClass"],["type","checkbox",3,"checked","disabled","change"],[1,"slider","round"],[3,"value","selected"],["name","edit-3",1,"mr-2",3,"click"],["name","trash",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),e._uU(6,"Adminstraion"),e.qZA()(),e.TgZ(7,"li",4)(8,"a",6),e._uU(9,"Users List"),e.qZA()()(),e.YNc(10,G,3,0,"a",7),e.qZA(),e.TgZ(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("input",function(){return i.searchUser()})("ngModelChange",function(r){return i.searchParams.search=r}),e.qZA(),e._UZ(14,"i-feather",11),e.qZA(),e.TgZ(15,"div",12)(16,"table",13)(17,"thead",14)(18,"tr")(19,"th")(20,"p",15),e._uU(21,"#"),e.qZA()(),e.TgZ(22,"th")(23,"p",15),e._uU(24,"Name"),e.qZA()(),e.TgZ(25,"th")(26,"p",15),e._uU(27,"Email"),e.qZA()(),e.TgZ(28,"th")(29,"p",15),e._uU(30,"Role"),e.qZA()(),e.TgZ(31,"th")(32,"p",15),e._uU(33,"Status"),e.qZA()(),e.YNc(34,ee,3,0,"th",16),e.qZA()(),e.YNc(35,oe,2,1,"tbody",17),e.qZA()(),e.TgZ(36,"app-pagination",18),e.NdJ("changePage",function(r){return i.changePage(r)})("ChangePageSize",function(r){return i.ChangePageSize(r)}),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("ngIf",i._auth.checkPermissions("administration","write")),e.xp6(3),e.Q6J("ngModel",i.searchParams.search),e.xp6(21),e.Q6J("ngIf",i._auth.checkPermissions("administration","write")),e.xp6(1),e.Q6J("ngIf",!i.isLoading),e.xp6(1),e.Q6J("from",i.pageFrom)("to",i.pageTo)("pageSize",i.searchParams.page_size)("totalPages",i.totalPages)("total",i.totalCount))},directives:[s.O5,T.u,l.Fj,l.JJ,l.On,s.sg,l.YN,l.Kr,s.mk,V.Q],styles:[".table{table-layout:fixed;word-wrap:break-word}.disabled{cursor:not-allowed;opacity:.8}\n"],encapsulation:2}),n})()},{path:"settings",component:Y}];let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(ae)],_.Bz]}),n})();var le=c(5530),ce=c(9618);let de=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.ez,l.u5,U.IJ,re,ce.m,T.p.pick(le.kEt)]]}),n})()},9618:(x,v,c)=>{c.d(v,{m:()=>f});var s=c(9808),_=c(4182),e=c(5e3);let f=(()=>{class m{}return m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[[s.ez,_.u5]]}),m})()},1628:(x,v,c)=>{c.d(v,{E:()=>m});var s=c(2340),_=c(4312),e=c(5e3),f=c(520);let m=(()=>{class l{constructor(d){this.http=d}usersListing(d={}){return this.http.post(`${s.N.apiUrl+_.j.getUsersList}`,d)}addUser(d={}){return this.http.post(`${s.N.apiUrl+_.j.addUser}`,d)}deleteUser(d={}){return this.http.post(`${s.N.apiUrl+_.j.deleteUser}`,d)}updateUser(d={}){return this.http.post(`${s.N.apiUrl+_.j.updateUser}`,d)}rolesListing(d={}){return this.http.post(`${s.N.apiUrl+_.j.getRolesList}`,d)}addRole(d={}){return this.http.post(`${s.N.apiUrl+_.j.addRole}`,d)}deleteRole(d={}){return this.http.post(`${s.N.apiUrl+_.j.deleteRole}`,d)}updateRole(d={}){return this.http.post(`${s.N.apiUrl+_.j.updateRole}`,d)}getPermissionsList(){return this.http.get(`${s.N.apiUrl+_.j.getPermissionsList}`)}getSettings(){return this.http.get(`${s.N.apiUrl+_.j.getAdminSettings}`)}updateSettings(d={}){return this.http.post(`${s.N.apiUrl+_.j.updateAdminSettings}`,d)}}return l.\u0275fac=function(d){return new(d||l)(e.LFG(f.eN))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);
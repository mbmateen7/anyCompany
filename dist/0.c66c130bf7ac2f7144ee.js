"use strict";(self.webpackChunkhumphree=self.webpackChunkhumphree||[]).push([[0],{6771:(f,d,r)=>{r.r(d),r.d(d,{PhonebookModule:()=>P});var a=r(8583),p=r(9763),m=r(9330),g=r(5860),t=r(3018),u=r(2027),Z=r(1947),s=r(5411),h=r(665),_=r(8601);function T(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr",25),t.TgZ(1,"td"),t.TgZ(2,"p",20),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"td"),t.TgZ(5,"p",20),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"p",20),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"div",26),t.TgZ(12,"a",27),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,C=i.index;return t.oxw().editCustomer(l,C)}),t._UZ(13,"i-feather",28),t.qZA(),t.TgZ(14,"a",27),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,C=i.index;return t.oxw().deleteCustomer(l,C)}),t._UZ(15,"i-feather",29),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=c.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(3),t.Oqu(e.phone_no),t.xp6(3),t.Oqu(e.email)}}const v=[{path:"",redirectTo:"customers"},{path:"customers",component:(()=>{class o{constructor(e,n){this._phonebook=e,this._modal=n,this.customers=[],this.searchParams={search:"",page_size:10,page:1},this.totalPages=1,this.modalConfig={animated:!0,keyboard:!1,backdrop:!1,ignoreBackdropClick:!0,windowClass:"modal-roles"},this.dateToday=new Date}ngOnInit(){this.getCustomerListing()}getCustomerListing(){this.searchSubscription&&this.searchSubscription.unsubscribe(),this.searchSubscription=this._phonebook.customerListing(this.searchParams).subscribe(e=>{this.customers=e.data.data,this.searchParams.page_size=e.data.per_page,this.searchParams.page=e.data.current_page,this.totalPages=e.data.last_page})}searchCustomers(){(0==this.searchParams.search.length||this.searchParams.search.length>=3)&&this.getCustomerListing()}changePage(e){this.searchParams.page=e,this.getCustomerListing()}ChangePageSize(e){this.searchParams.page=1,this.searchParams.page_size=e,this.getCustomerListing()}addCustomer(){const e=this._modal.open(m.y,this.modalConfig);e.componentInstance.response.subscribe(n=>{console.log(n),n.success&&this.getCustomerListing(),e.dismiss()})}editCustomer(e,n){const i=this._modal.open(m.y,this.modalConfig);i.componentInstance.cus=Object.assign({},e),i.componentInstance.type="edit",i.componentInstance.response.subscribe(l=>{l.success&&(this.customers[n]=l.data),i.dismiss()})}deleteCustomer(e,n){const i=this._modal.open(g.p,this.modalConfig);i.componentInstance.data=Object.assign({},e),i.componentInstance.type="customer",i.componentInstance.response.subscribe(l=>{l.success&&this.customers.splice(n,1),i.dismiss()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.Q),t.Y36(Z.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customers"]],decls:47,vars:8,consts:[[1,"dashboard-main"],[1,"dashboard-content"],[1,"d-flex","align-items-center","mb-16","justify-content-between","mr-70"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)",1,"breadcrumb-link"],["href","javascript:void(0)",1,"breadcrumb-link","active"],[1,"d-flex"],["href","javascript:void(0)",1,"secondary-sup",3,"click"],["name","plus",1,"plus"],[1,"roles-main","delivery-list-table"],[1,"d-flex","align-items-center","justify-content-between","delivery-list-main"],[1,"d-flex","for-media-setts"],[1,"form-group","sear-bar-roles","position-relative","mb-0"],["type","search","placeholder","Search..","id","email",1,"form-control","form-control-roles",3,"ngModel","input","ngModelChange"],["name","search",1,"search-ctm"],[1,"tab-table"],[1,"tables-roles-main","tables-users-main","table-responsive"],[1,"table"],[1,"thead-ctm"],[1,"inner-cell"],["aria-hidden","true",1,"fa","fa-arrow-down"],[1,"t-body-ctm"],["class","active-row",4,"ngFor","ngForOf"],[3,"pageSize","totalPages","changePage","ChangePageSize"],[1,"active-row"],[1,"list-icons-talbe","d-flex","justify-content-center"],["href","javascript:void(0)",1,"icon-anchor-list",3,"click"],["name","edit-3",1,"icon-width"],["name","trash",1,"icon-width"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"ul",3),t.TgZ(4,"li",4),t.TgZ(5,"a",5),t._uU(6,"PHONEBOOK"),t.qZA(),t.qZA(),t.TgZ(7,"li",4),t.TgZ(8,"a",5),t._uU(9,"Customers"),t.qZA(),t.qZA(),t.TgZ(10,"li",4),t.TgZ(11,"a",6),t._uU(12),t.ALo(13,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",7),t.TgZ(15,"a",8),t.NdJ("click",function(){return n.addCustomer()}),t._UZ(16,"i-feather",9),t._uU(17," Add Entry "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",10),t.TgZ(19,"div",11),t.TgZ(20,"div",12),t.TgZ(21,"div",13),t.TgZ(22,"input",14),t.NdJ("input",function(){return n.searchCustomers()})("ngModelChange",function(l){return n.searchParams.search=l}),t.qZA(),t._UZ(23,"i-feather",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",16),t.TgZ(25,"div",17),t.TgZ(26,"table",18),t.TgZ(27,"thead",19),t.TgZ(28,"tr"),t.TgZ(29,"th"),t.TgZ(30,"p",20),t._uU(31,"Name"),t._UZ(32,"i",21),t.qZA(),t.qZA(),t.TgZ(33,"th"),t.TgZ(34,"p",20),t._uU(35,"Telephone"),t._UZ(36,"i",21),t.qZA(),t.qZA(),t.TgZ(37,"th"),t.TgZ(38,"p",20),t._uU(39,"Email"),t._UZ(40,"i",21),t.qZA(),t.qZA(),t.TgZ(41,"th"),t.TgZ(42,"p",20),t._uU(43,"Actions"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"tbody",22),t.YNc(45,T,16,3,"tr",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"app-pagination",24),t.NdJ("changePage",function(l){return n.changePage(l)})("ChangePageSize",function(l){return n.ChangePageSize(l)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.hij("Week ",t.xi3(13,5,n.dateToday,"ww"),""),t.xp6(10),t.Q6J("ngModel",n.searchParams.search),t.xp6(23),t.Q6J("ngForOf",n.customers),t.xp6(1),t.Q6J("pageSize",n.searchParams.page_size)("totalPages",n.totalPages))},directives:[s.uy,h.Fj,h.JJ,h.On,a.sg,_.Q],pipes:[a.uU],styles:[""]}),o})()},{path:"suppliers",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-suppliers"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"suppliers works!"),t.qZA())},styles:[""]}),o})()},{path:"internal-list",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-internal-list"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"internal-list works!"),t.qZA())},styles:[""]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(v)],p.Bz]}),o})();var b=r(940),U=r(9618);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,A,U.m,h.u5,s.p1.pick(b.kEt)]]}),o})()},1702:(f,d,r)=>{r.d(d,{W:()=>t});var a=r(2340),p=r(4312),m=r(3018),g=r(1841);let t=(()=>{class u{constructor(s){this.http=s}rodListing(s={}){return this.http.post(`${a.N.apiUrl+p.j.rodListing}`,s)}productsListing(s={}){return this.http.post(`${a.N.apiUrl+p.j.productListing}`,s)}storeWorkOrder(s={}){return this.http.post(`${a.N.apiUrl+p.j.storeWorkOrder}`,s)}getWorkOrder(s={}){return this.http.post(`${a.N.apiUrl+p.j.getWorkOrder}`,s)}getCustomerNumberOrders(s={}){return this.http.post(`${a.N.apiUrl+p.j.getCustomerOrders}`,s)}updateInvoiceNo(s={}){return this.http.post(`${a.N.apiUrl+p.j.updateInvoiceNo}`,s)}updateWorkOrder(s={}){return this.http.post(`${a.N.apiUrl+p.j.updateWorkOrder}`,s)}getJobNotes(s={}){return this.http.post(`${a.N.apiUrl+p.j.getJobNotes}`,s)}addJobNote(s={}){return this.http.post(`${a.N.apiUrl+p.j.addJobNote}`,s)}deleteJobNote(s={}){return this.http.post(`${a.N.apiUrl+p.j.deleteJobNote}`,s)}addDevliveryNote(s={}){return this.http.post(`${a.N.apiUrl+p.j.addDeliveryNote}`,s)}updateDeliveryNote(s={}){return this.http.post(`${a.N.apiUrl+p.j.updateDeliveryNote}`,s)}getDeliveryNotes(s={}){return this.http.post(`${a.N.apiUrl+p.j.getDeliveryNotes}`,s)}multipleUpdateOrder(s={}){return this.http.post(`${a.N.apiUrl+p.j.multiOrderUpdate}`,s)}updateOrderStatus(s={}){return this.http.post(`${a.N.apiUrl+p.j.updateOrderStatus}`,s)}bulkStatusUpdate(s={}){return this.http.post(`${a.N.apiUrl+p.j.bulkStatusUpdate}`,s)}}return u.\u0275fac=function(s){return new(s||u)(m.LFG(g.eN))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urls } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class FscService {


    constructor(private http: HttpClient) {
    }

    listing(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.fscListing}`, params);
    }


    purchaseOrderListing(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.purchaseOrderListing}`, params);
    }

    addPurchaseOrder(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.addPurchaseOrder}`, params);
    }

    updateOrder(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.updateOrder}`, params);
    }
}

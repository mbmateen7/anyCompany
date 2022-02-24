import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urls } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class AccountService {


    constructor(private http: HttpClient) {
    }

    // Accounts
    accountStats(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.accountStats}`, params);
    }

    customerTotals(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.customerTotals}`, params);
    }

    salesOrders(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.salesOrdersListing}`, params);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urls } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class PhonebookService {


    constructor(private http: HttpClient) {
    }

    customerListing(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.customerListing}`, params);
    }

    addCustomer(params = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl + urls.customerAdd}`, params);
    }
}

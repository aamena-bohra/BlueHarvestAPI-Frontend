import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private apiUrl = 'http://localhost:5053/api'; 

  constructor(private http: HttpClient) {}

  getCustomerDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer/`+ id);
  }

  createCustomer(name: string, surname: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/customers`, { name, surname });
  }

  openCurrentAccount(customerId: number, initialCredit: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/account`, { "CustomerId":customerId, "InitialDeposit":initialCredit });
  }

  createDummyCustomer(){
    return this.http.post(`${this.apiUrl}/customer`, null);
  }
}

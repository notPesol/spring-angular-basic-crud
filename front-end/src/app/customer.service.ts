import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = 'http://localhost:8080/api/v1/customers';

  constructor(private httpClient: HttpClient  ) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  create(customer: Customer): Observable<Object> {
     return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, customer);
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.baseUrl}/${id}`);
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly #http = inject(HttpClient);
  readonly #baseUrl = '/api/customers';

  getAll(): Observable<ApiResponse<Customer[]>> {
    return this.#http.get<ApiResponse<Customer[]>>(this.#baseUrl);
  }

  getProspectos(): Observable<ApiResponse<Customer[]>> {
    return this.#http.get<ApiResponse<Customer[]>>(`${this.#baseUrl}/prospectos`);
  }

  getById(id: number): Observable<ApiResponse<Customer>> {
    return this.#http.get<ApiResponse<Customer>>(`${this.#baseUrl}/${id}`);
  }

  create(customer: Partial<Customer>): Observable<ApiResponse<Customer>> {
    return this.#http.post<ApiResponse<Customer>>(this.#baseUrl, customer);
  }

  update(id: number, customer: Partial<Customer>): Observable<ApiResponse<Customer>> {
    return this.#http.put<ApiResponse<Customer>>(`${this.#baseUrl}/${id}`, customer);
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.#http.delete<ApiResponse<null>>(`${this.#baseUrl}/${id}`);
  }

  convertToClient(id: number): Observable<ApiResponse<Customer>> {
    return this.#http.patch<ApiResponse<Customer>>(`${this.#baseUrl}/${id}/convert`, {});
  }
}

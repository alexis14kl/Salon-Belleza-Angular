import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
  TableDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    ButtonDirective,
    BadgeComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    IconDirective
  ]
})
export class CustomerListComponent implements OnInit {

  readonly #customerService = inject(CustomerService);

  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  searchTerm = '';
  loading = false;

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.#customerService.getAll().subscribe({
      next: (res) => {
        this.customers = res.data || [];
        this.filteredCustomers = this.customers;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  search(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCustomers = this.customers.filter(c =>
      c.nombre.toLowerCase().includes(term) ||
      c.apellido.toLowerCase().includes(term) ||
      c.telefono.includes(term)
    );
  }

  deleteCustomer(id: number): void {
    if (!confirm('¿Está seguro de eliminar este cliente?')) return;
    this.#customerService.delete(id).subscribe({
      next: () => {
        this.customers = this.customers.filter(c => c.id !== id);
        this.search();
      }
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
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
  selector: 'app-customer-prospectos',
  templateUrl: './customer-prospectos.component.html',
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
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    IconDirective
  ]
})
export class CustomerProspectosComponent implements OnInit {

  readonly #customerService = inject(CustomerService);

  prospectos: Customer[] = [];
  filteredProspectos: Customer[] = [];
  searchTerm = '';
  loading = false;

  ngOnInit(): void {
    this.loadProspectos();
  }

  loadProspectos(): void {
    this.loading = true;
    this.#customerService.getProspectos().subscribe({
      next: (res) => {
        this.prospectos = res.data || [];
        this.filteredProspectos = this.prospectos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  search(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProspectos = this.prospectos.filter(c =>
      c.nombre.toLowerCase().includes(term) ||
      c.apellido.toLowerCase().includes(term) ||
      c.telefono.includes(term)
    );
  }

  convertToClient(id: number): void {
    if (!confirm('¿Convertir este prospecto a cliente?')) return;
    this.#customerService.convertToClient(id).subscribe({
      next: () => {
        this.prospectos = this.prospectos.filter(c => c.id !== id);
        this.search();
      }
    });
  }

  deleteProspecto(id: number): void {
    if (!confirm('¿Está seguro de eliminar este prospecto?')) return;
    this.#customerService.delete(id).subscribe({
      next: () => {
        this.prospectos = this.prospectos.filter(c => c.id !== id);
        this.search();
      }
    });
  }
}

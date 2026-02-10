import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective,
  RowComponent,
  TextareaDirective
} from '@coreui/angular';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    FormControlDirective,
    FormLabelDirective,
    FormSelectDirective,
    ButtonDirective,
    TextareaDirective
  ]
})
export class CustomerFormComponent implements OnInit {

  readonly #fb = inject(FormBuilder);
  readonly #customerService = inject(CustomerService);
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);

  form!: FormGroup;
  isEdit = false;
  customerId: number | null = null;
  loading = false;
  title = 'Nuevo Cliente';

  ngOnInit(): void {
    this.form = this.#fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: [''],
      direccion: [''],
      notas: [''],
      role_id: [2]
    });

    const id = this.#route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.customerId = +id;
      this.title = 'Editar Cliente';
      this.loadCustomer();
    }
  }

  loadCustomer(): void {
    this.loading = true;
    this.#customerService.getById(this.customerId!).subscribe({
      next: (res) => {
        this.form.patchValue(res.data);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.#router.navigate(['/clientes/listado']);
      }
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const data = this.form.value;

    const request = this.isEdit
      ? this.#customerService.update(this.customerId!, data)
      : this.#customerService.create(data);

    request.subscribe({
      next: () => {
        this.loading = false;
        this.#router.navigate(['/clientes/listado']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.#router.navigate(['/clientes/listado']);
  }
}

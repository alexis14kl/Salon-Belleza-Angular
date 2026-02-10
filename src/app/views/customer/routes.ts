import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    loadComponent: () => import('./customer-list/customer-list.component').then(m => m.CustomerListComponent),
    data: { title: 'Listado de Clientes' }
  },
  {
    path: 'nuevo',
    loadComponent: () => import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent),
    data: { title: 'Nuevo Cliente' }
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent),
    data: { title: 'Editar Cliente' }
  },
  {
    path: 'prospectos',
    loadComponent: () => import('./customer-prospectos/customer-prospectos.component').then(m => m.CustomerProspectosComponent),
    data: { title: 'Prospectos' }
  }
];

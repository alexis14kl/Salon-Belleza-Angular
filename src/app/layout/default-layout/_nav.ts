import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Gestion'
  },
  {
    name: 'Agenda',
    url: '/agenda',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'Citas del Dia',
        url: '/agenda/hoy',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Nueva Cita',
        url: '/agenda/nueva',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Historial de Citas',
        url: '/agenda/historial',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Clientes',
    url: '/clientes',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Listado',
        url: '/clientes/listado',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Nuevo Cliente',
        url: '/clientes/nuevo',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Prospectos',
        url: '/clientes/prospectos',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Servicios',
    url: '/servicios',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Catalogo',
        url: '/servicios/catalogo',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Categorias',
        url: '/servicios/categorias',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Equipo'
  },
  {
    name: 'Colaboradores',
    url: '/colaboradores',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Listado',
        url: '/colaboradores/listado',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Horarios',
        url: '/colaboradores/horarios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Comisiones',
        url: '/colaboradores/comisiones',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Ventas'
  },
  {
    name: 'Caja',
    url: '/caja',
    iconComponent: { name: 'cil-dollar' },
    children: [
      {
        name: 'Punto de Venta',
        url: '/caja/pos',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Historial Ventas',
        url: '/caja/historial',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Corte de Caja',
        url: '/caja/corte',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Productos',
    url: '/productos',
    iconComponent: { name: 'cil-basket' },
    children: [
      {
        name: 'Inventario',
        url: '/productos/inventario',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Nuevo Producto',
        url: '/productos/nuevo',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Proveedores',
    url: '/proveedores',
    iconComponent: { name: 'cil-layers' },
    children: [
      {
        name: 'Listado',
        url: '/proveedores/listado',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pedidos',
        url: '/proveedores/pedidos',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Reportes'
  },
  {
    name: 'Reportes',
    url: '/reportes',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'Ventas',
        url: '/reportes/ventas',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Servicios',
        url: '/reportes/servicios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Clientes',
        url: '/reportes/clientes',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Colaboradores',
        url: '/reportes/colaboradores',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Sistema',
    class: 'mt-auto'
  },
  {
    name: 'Usuarios',
    url: '/usuarios',
    iconComponent: { name: 'cil-lockLocked' },
    children: [
      {
        name: 'Listado',
        url: '/usuarios/listado',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Roles',
        url: '/usuarios/roles',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Configuracion',
    url: '/configuracion',
    iconComponent: { name: 'cil-settings' }
  }
];

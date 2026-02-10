# Salon de Belleza - Frontend (Angular)

## Stack Tecnologico
- **Framework:** Angular 21.1.3
- **UI Library:** CoreUI Free Angular Admin Template v5.6.12
- **Estilos:** SCSS + CoreUI Bootstrap 5
- **Charts:** Chart.js via @coreui/chartjs

## Repositorio Git
- **GitHub:** https://github.com/alexis14kl/Salon-Belleza-Angular
- **Branch principal:** main
- **Usuario Git:** Rapalexism / rapalexism@gmail.com

## Relacion con el Backend
- **Backend:** https://github.com/alexis14kl/Salon-Belleza-Laravel
- **API Base URL:** https://alianzasagroindustriales.com/api
- **URL Frontend:** https://alianzasagroindustriales.com/admin/
- El build de Angular se despliega dentro de la carpeta `public/admin/` del proyecto Laravel

## CI/CD (GitHub Actions)
El archivo `.github/workflows/deploy.yml` se ejecuta en cada push a `main`:
1. Checkout del codigo
2. Setup Node.js 24
3. `npm ci` - Instala dependencias
4. `npx ng build --base-href /admin/` - Build de produccion con base href configurado
5. Se conecta al servidor via SSH y crea la carpeta `admin/` en `public/`
6. Copia el contenido de `dist/coreui-free-angular-admin-template/browser/` a `public/admin/` via SCP
7. Verifica que el deploy fue exitoso

**Secreto GitHub:** `SSH_PASSWORD` - contraseña SSH del servidor Hostinger

## Servidor de Produccion
- **IP:** 147.93.38.64
- **Puerto SSH:** 65002
- **Usuario SSH:** u691277401
- **Ruta destino:** `/home/u691277401/domains/alianzasagroindustriales.com/Mis_Sitios_WEB_Salon_Belleza/Mis_Sitios_WEB_Salon_Belleza/public/admin`

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:4200)
npm start

# Build de produccion
npx ng build --base-href /admin/

# Build de desarrollo
npm run watch

# Tests
npm test
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.ts          # Componente raiz
│   ├── app.config.ts             # Configuracion de la app
│   ├── app.routes.ts             # Rutas principales
│   ├── icons/                    # Iconos CoreUI
│   ├── layout/
│   │   └── default-layout/       # Layout principal (header, footer, sidebar)
│   │       ├── _nav.ts           # Navegacion del sidebar
│   │       ├── default-header/   # Header con usuario, notificaciones
│   │       └── default-footer/   # Footer
│   └── views/
│       ├── dashboard/            # Dashboard principal
│       ├── pages/
│       │   ├── login/            # Pagina de login
│       │   ├── register/         # Pagina de registro
│       │   ├── page404/          # Pagina 404
│       │   └── page500/          # Pagina 500
│       ├── base/                 # Componentes base (accordion, cards, tabs...)
│       ├── buttons/              # Botones y dropdowns
│       ├── charts/               # Graficos
│       ├── forms/                # Formularios
│       ├── icons/                # Vista de iconos
│       ├── notifications/        # Alertas, badges, modals, toasts
│       ├── theme/                # Colores y tipografia
│       └── widgets/              # Widgets del dashboard
├── assets/                       # Imagenes, favicon, branding
├── components/                   # Componentes compartidos (docs)
├── scss/                         # Estilos globales
└── index.html                    # HTML principal
```

## API del Backend

### Endpoints disponibles
| Metodo | URI | Auth | Descripcion |
|--------|-----|------|-------------|
| GET | `/api/index` | No | Health check |
| POST | `/api/auth` | No | Login (retorna token) |
| POST | `/api/logout` | Si | Logout (elimina token) |

### Autenticacion
- El login retorna un token Sanctum
- Para rutas protegidas enviar header: `Authorization: Bearer {token}`
- El token se obtiene del campo `data.token` en la respuesta del login

### Formato de Respuesta
```json
{
    "status": true/false,
    "message": "Descripcion",
    "data": null | { ... }
}
```

### Login Request
```json
POST /api/auth
{
    "name_email": "usuario o correo",
    "password": "contraseña"
}
```

### Roles del Sistema
| ID | Nombre |
|----|--------|
| 1 | ADMINISTRADOR |
| 2 | CLIENTE |
| 3 | PROSPECTO |
| 4 | COLABORADOR |
| 5 | PROVEEDOR |

## Configuracion Angular

### Base Href
- **Desarrollo:** `./` (definido en `src/index.html`)
- **Produccion:** `/admin/` (configurado en el build del CI/CD con `--base-href /admin/`)

### Output Path
- Definido en `angular.json`: `dist/coreui-free-angular-admin-template`
- El builder `@angular/build:application` genera los archivos en el subdirectorio `browser/`

## Notas Importantes
- El template base es CoreUI Free. La version Pro tiene mas componentes
- El `prebuild` script en package.json ejecuta tests con ChromeHeadless, por eso el CI/CD usa `npx ng build` directamente
- Los archivos del build se copian via SCP con `strip_components: 3` para quitar `dist/coreui-free-angular-admin-template/browser/`
- La ruta `/admin/{any?}` en Laravel sirve el `index.html` de Angular para soportar el routing del SPA
- Node.js requerido: ^20.19.0 || ^22.12.0 || ^24.0.0

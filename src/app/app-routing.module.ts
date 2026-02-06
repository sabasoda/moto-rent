import { Routes } from '@angular/router';
import { PublicDefaultLayoutComponent } from './layout/public-layout/public-default-layout.component';
import { PrivateDefaultLayoutComponent } from './layout/private-layout';
import { authGuard } from './core/guards/auth.guard';

export const mainRoutes: Routes = [
  // =========================
  // AREA PUBBLICA
  // =========================
  /*{
    path: '',
    component: PublicDefaultLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
        data: {
          title: 'Register Page'
        }
      }
    ]
  },*/

  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },

  // =========================
  // AREA PRIVATA
  // =========================
  {
    path: '',
    component: PrivateDefaultLayoutComponent,
    canActivate: [authGuard],
    children: [
      /**
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./private/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'clienti',
        loadChildren: () =>
          import('./private/clienti/clienti.module').then(m => m.ClientiModule)
      },
      {
        path: 'veicoli',
        loadChildren: () =>
          import('./private/veicoli/veicoli.module').then(m => m.VeicoliModule)
      },
      {
        path: 'contratti',
        loadChildren: () =>
          import('./private/contratti/contratti.module').then(m => m.ContrattiModule)
      },
      {
        path: 'utenti',
        loadChildren: () =>
          import('./private/utenti/utenti.module').then(m => m.UtentiModule)
      }
        */
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },

  // =========================
  // FALLBACK
  // =========================
  {
    path: '**',
    redirectTo: 'login'
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contract'
    },
    children: [

      {
        path: '',
        redirectTo: 'contract',
        pathMatch: 'full'
      },
      {
        path: 'contract',
        loadComponent: () => import('./contract/contract.component').then(m => m.ContractComponent),
        data: {
          title: 'Contract'
        }
      },
      {
        path: 'vehicle',
        loadComponent: () => import('./vehicle/vehicle.component').then(m => m.VehicleComponent),
        data: {
          title: 'Vehicle'
        }
      },
      {
        path: 'user',
        loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
        data: {
          title: 'User'
        }
      },
      {
        path: 'customer',
        loadComponent: () => import('./customer/customer.component').then(m => m.CustomerComponent),
        data: {
          title: 'Customer'
        }
      }

    ]
  },
];


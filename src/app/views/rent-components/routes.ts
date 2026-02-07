import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rent Components'
    },
    children: [
      // [ROUTING-TIP] Dichiarazione di rotte non globali, 
      // collegate al gruppo di componenti: rent-components
      // Una volta dichiarato questo file con le rotte che servono, dobbiamo rendere visibili queste 
      // rotte al routing globale, andando quindi nelle routes del padre di questa rotta, quindi nella principale
      // che si trova sotto scr/app
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


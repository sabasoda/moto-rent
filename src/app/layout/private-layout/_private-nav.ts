import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Panoramica'
  },
  {
    name: 'Dashboard',
    // url: '/dashboard',
    // Forma corretta Angular-style con CoreUI dell'url
    // Anche la forma di cui sotto funziona, ma non è consigliabile per CoreUI
    // url: ['/rent-components/user']
    url: ['/', 'dashboard'], 
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Utenti'
  },
  {
    name: 'Operatore',
    // url: '/rent-components/user',
    url: ['/rent-components', 'user'], 
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Cliente',
    // url: '/rent-components/customer',
    url: ['/rent-components', 'customer'], 
    iconComponent: { name: 'cil-user-follow' }
  },
  {
    title: true,
    name: 'Veicoli'
  },
  {
    name: 'Moto',
    // url: '/rent-components/vehicle',
    url: ['/rent-components', 'vehicle'], 
    iconComponent: { name: 'cilBike' }
  }
];

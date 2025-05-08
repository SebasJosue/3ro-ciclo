import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'clue-modal',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'clue-modal',
    pathMatch: 'full',
  },
];

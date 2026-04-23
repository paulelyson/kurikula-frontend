import { Routes } from '@angular/router';

export const routes: Routes = [
 {
  path: 'user',
  loadChildren: () => import('./modules/user/user-routing-module').then(m => m.UserRoutingModule),
 }
];

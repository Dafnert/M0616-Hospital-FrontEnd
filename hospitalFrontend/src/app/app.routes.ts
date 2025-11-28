import { Routes } from '@angular/router';
import { FindNurse } from './find-nurse/find-nurse';

export const routes: Routes = [
  { path: '', redirectTo: 'find-nurse', pathMatch: 'full' },
  { path: 'find-nurse', component: FindNurse }
];

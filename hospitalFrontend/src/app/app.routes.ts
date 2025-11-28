import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { NursesComponent } from './pages/nurses/nurses';
import { FindNurseComponent } from './pages/find-nurse/find-nurse';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nurses', component: NursesComponent },
  { path: 'find-nurse', component: FindNurseComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

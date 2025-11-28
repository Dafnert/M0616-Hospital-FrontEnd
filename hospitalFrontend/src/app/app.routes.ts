import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Login } from './pages/login/login.component';
import { ListnursesComponent } from './listnurses/listnurses';
import { FindNurseComponent } from './pages/find-nurse/find-nurse';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nurses', component: ListnursesComponent }
  { path: 'find-nurse', component: FindNurseComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
  },
];


import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { ListnursesComponent } from './pages/listnurses/listnurses';
//import { FindNurseComponent } from './pages/find-nurse/find-nurse.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nurses', component: ListnursesComponent },
 // { path: 'find-nurse', component: FindNurseComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
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
  { path: 'find-nurse', component: FindNurse }
  
  
  
];


import { Routes } from '@angular/router';
<<<<<<< HEAD
import { ListnursesComponent } from './listnurses/listnurses';

export const routes: Routes = [
  { path: '', component: ListnursesComponent },  
  { path: 'nurses', component: ListnursesComponent }
];  
=======
import { Login } from './pages/login/login.component';

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
>>>>>>> 4863f0003dcacbfb44cf6905fe2a46c8ddf3ca4c

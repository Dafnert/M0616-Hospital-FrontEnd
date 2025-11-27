import { Routes } from '@angular/router';
import { ListnursesComponent } from './listnurses/listnurses';

export const routes: Routes = [
  { path: '', component: ListnursesComponent },  
  { path: 'nurses', component: ListnursesComponent }
];  
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listnurses',
  templateUrl: './listnurses.html',
  styleUrls: ['./listnurses.css'],
  imports: [RouterLink]
})
export class ListnursesComponent {
  logoAlt: string = "Logo hospital";
  
  nurses = [
    { id: 1, name: 'Ferran Bustos', specialty: 'Pediatría' },
    { id: 2, name: 'Dafne Vicente', specialty: 'Urgencias' },
    { id: 2, name: 'Adria Vasquez', specialty: 'Urgencias' },
    { id: 3, name: 'Samantha', specialty: 'Quirófano' }
  ];
}
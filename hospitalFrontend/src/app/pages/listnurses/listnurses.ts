import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Nurse {
  id: number;
  name: string;
  specialty: string;
  img: string;
}

@Component({
  selector: 'app-listnurses',
  standalone: true,
 
  templateUrl: './listnurses.html',
  styleUrls: ['./listnurses.css']
})
export class ListnursesComponent implements OnInit {
  title: string = "Hospital Management";
  logoAlt: string = "Logo hospital";
  
  nurses: Nurse[] = [
    { id: 1, name: 'Ferran Bustos', specialty: 'Cardiología', img: 'img/images.jpg' },
    { id: 2, name: 'Dafne Vicente', specialty: 'Urgencias', img: 'img/images.jpg' },
    { id: 3, name: 'Adria Vasquez', specialty: 'Urgencias', img: 'img/images.jpg' },
    { id: 4, name: 'Samantha', specialty: 'Quirófano', img: 'img/images.jpg' }
  ];

  ngOnInit(): void {
    
    console.log('Número de enfermeros:', this.nurses.length);
  }

  toggleView(): void {
    this.title = "Lista actualizada de enfermeros";
    console.log('Vista actualizada');
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NurseService } from '../../services/nurse.service';
import { Nurse } from '../../models/nurse'; 


@Component({
  selector: 'app-listnurses',
  standalone: true,
 
  templateUrl: './list-nurses.html',
  styleUrls: ['./list-nurses.css']
})
export class ListnursesComponent implements OnInit {
  title: string = "Hospital Management";
  logoAlt: string = "Logo hospital";

   nurses: Nurse[] = [];

    constructor(private _nurseService: NurseService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
  this._nurseService.getAll().subscribe({
  next: (data: any[]) => {
    this.nurses = data.map(n => ({
      ...n,
      specialty: n.speciality,
      img: '/img/images.jpg'
    }));
  }
});
}


  toggleView(): void {
    this.title = "Lista actualizada de enfermeros";
  }
}
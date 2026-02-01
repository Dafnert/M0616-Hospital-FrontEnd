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
  private BACKEND_URL = 'http://localhost:8000';

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
        img: this.BACKEND_URL + n.img
      }));
    },
    error: (err) => console.error(err)
  });
}





  toggleView(): void {
    this.title = "Lista actualizada de enfermeros";
  }
}
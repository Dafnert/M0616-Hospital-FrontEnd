import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NurseService } from '../services/nurse.service';
import { Router } from '@angular/router';
import { Nurse } from '../models/nurse';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  providers:[NurseService]
})


export class ProfileComponent implements OnInit {
  nurse: Nurse = new Nurse();
  id!: number;
 constructor(
    private _nurseService: NurseService,
    private router: Router
  ) {}
ngOnInit(): void {
  const storedId = localStorage.getItem('id');

  if (storedId) {
    this.id = Number(storedId);
    this.readById();
  } else {
    console.error('No hay id en localStorage');
  }
}

   readById(): void {
    this._nurseService.readById(this.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.nurse = response.nurse;
        } else {
          alert(response.message);
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error al cargar el perfil');
      }
    });
  }
}

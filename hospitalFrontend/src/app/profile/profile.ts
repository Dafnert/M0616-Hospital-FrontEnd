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
  styleUrls: ['./profile.css'],
})


export class ProfileComponent implements OnInit {
  nurse: Nurse = new Nurse();
  id!: number;
 constructor(
    private _nurseService: NurseService,
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
  updateNurse():void{

    this._nurseService.updateNurse(this.id, this.nurse).subscribe({
      next:(response) => {
        if(response.success){
          this.nurse=response.nurse;
          this.readById();
        }else{
          alert(response.message);
        }
      },
      error: (err)=>{
        alert('ERROR UPDATE NURSE')
      }
    })
  }
  confirm = false;
  open():void{
    this.confirm=true;
  }
  cancelUpdate():void{
    this.confirm=false;
  }
  confirmUpdate():void{
    this.confirm=false;
    this.updateNurse()
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NurseService } from '../../services/nurse.service';



@Component({
  selector: 'app-find-nurse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './find-nurse.html',
  styleUrls: ['./find-nurse.css']
})
export class FindNurseComponent {
  userInput: string = '';
   searchResults: any[] = [];
  errorMessage: string = '';

  constructor(private nurseService: NurseService) {}

  findNurse(): void {
    if (!this.userInput.trim()) {
      this.errorMessage = 'Por favor, ingresa un nombre';
      this.searchResults = [];
      return;
    }

    this.nurseService.findByName(this.userInput).subscribe({
      next: (response) => {
        if (response.success) {
          this.searchResults = response.data;
          this.errorMessage = '';
        } else {
          this.searchResults = [];
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        console.error('Error al buscar:', error);
        this.errorMessage = 'Error al conectar con el servidor';
        this.searchResults = [];
      }
    });
  }
}
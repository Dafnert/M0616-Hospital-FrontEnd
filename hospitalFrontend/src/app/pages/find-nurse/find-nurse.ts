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
  output: string = '';

  constructor(private nurseService: NurseService) {}

  findNurse(): void {
  this.nurseService.findByName(this.userInput).subscribe({
    next: (response: any) => {

      const foundList = response.data ?? [];

      if (foundList.length > 0) {
        this.output = foundList
          .map((n: any, index: number) =>
            `🩺 Enfermero #${index + 1}\n` +
            `Nombre: ${n.name}\n` +
            `Apellido: ${n.surname}\n` +
            `Edad: ${n.age}\n` +
            `Especialidad: ${n.speciality}\n` +
            `Usuario: ${n.username}\n`
          )
          .join('\n-----------------------\n\n');
      } else {
        this.output = 'No se encontró ningún enfermero con ese nombre.';
      }
    },
    error: (err) => {
      console.error(err);
      this.output = 'Error al buscar enfermeros.';
    }
  });
}

}

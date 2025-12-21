import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NurseService } from 'nurse/service';



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
    const foundList = this.nurseService.findByName(this.userInput) as any[];

    if (foundList.length > 0) {
      this.output = foundList
        .map((n: any, index: number) =>
          `🩺 Enfermero #${index + 1}\n` +
          `Nombre: ${n.name}\n` +
          `Edad: ${n.age}\n` +
          `Departamento: ${n.department}\n` +
          `Experiencia: ${n.experience}\n` +
          `Turno: ${n.shift}\n`
        )
        .join('\n-----------------------\n\n');
    } else {
      this.output = 'No se encontró ningún enfermero con ese nombre.';
    }
  }
}

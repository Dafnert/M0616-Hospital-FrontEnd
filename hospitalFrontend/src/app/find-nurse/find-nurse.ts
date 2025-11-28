import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-nurse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './find-nurse.html',
  styleUrls: ['./find-nurse.css']
})
export class FindNurse {

  userInput: string = "";
  output: string = "";

  //  Base de datos de enfermeros simulada
  nurses = [
    {
      name: "Ferran Arbustos",
      age: 32,
      department: "Urgencias",
      experience: "5 años",
      shift: "Mañana"
    },
    {
      name: "Adri Vazquez",
      age: 41,
      department: "UCI",
      experience: "12 años",
      shift: "Noche"
    },
    {
      name: "Dafne Vicente",
      age: 29,
      department: "Pediatría",
      experience: "3 años",
      shift: "Tarde"
    },
    {
      name: "Samhanta",
      age: 37,
      department: "Quirófano",
      experience: "8 años",
      shift: "Mañana"
    },
    {
      name: "Samhanta",
      age: 41,
      department: "Quirófano",
      experience: "8 años",
      shift: "Mañana"
    }
  ];


  findNurse() {
    const search = this.userInput.toLowerCase().trim();

  
    const foundList = this.nurses.filter(n =>
      n.name.toLowerCase().includes(search)
    );

    if (foundList.length > 0) {
      this.output = foundList
        .map((n, index) =>
          `🩺 Enfermero #${index + 1}\n` +
          `Nombre: ${n.name}\n` +
          `Edad: ${n.age}\n` +
          `Departamento: ${n.department}\n` +
          `Experiencia: ${n.experience}\n` +
          `Turno: ${n.shift}\n`
        )
        .join("\n-------------------------\n\n");
    } else {
      this.output = " No se encontró ningún enfermero con ese nombre.";
    }
  }

 
  capitalize() {
    this.output = this.userInput
      .split(" ")
      .map(w => w[0]?.toUpperCase() + w.slice(1))
      .join(" ");
  }
}

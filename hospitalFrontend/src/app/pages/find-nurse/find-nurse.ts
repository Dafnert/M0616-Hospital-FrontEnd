import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Agregar esta importación

@Component({
  selector: 'app-find-nurse',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar CommonModule aquí
  templateUrl: './find-nurse.html',
  styleUrls: ['./find-nurse.css']
})
export class FindNurseComponent {
  userInput: string = "";
  output: string = "";
  
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
      name: "Samantha",
      age: 37,
      department: "Quirófano",
      experience: "8 años",
      shift: "Mañana"
    },
    {
      name: "Samantha",
      age: 25,
      department: "Urgencias",
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
        .join("\n-----------------------\n\n");
    } else {
      this.output = "❌ No se encontró ningún enfermero con ese nombre.";
    }
  }
}
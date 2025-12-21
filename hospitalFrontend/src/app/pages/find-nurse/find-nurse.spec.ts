import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private nurses = [
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

  findByName(name: string) {
    const search = name.toLowerCase().trim();
    return this.nurses.filter(n =>
      n.name.toLowerCase().includes(search)
    );
  }
}

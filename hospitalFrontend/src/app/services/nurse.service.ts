import { Injectable } from '@angular/core';
import { Nurse } from '../models/nurse';

@Injectable({
  providedIn: 'root'
})
export class NurseService{
    
private nurses: Nurse[] = [
    new Nurse(1, 'Ana', 'López', 30, 'UCI', 'enfermero', 'enfermero123'),
    new Nurse(2, 'Carlos', 'Martín', 35, 'Pediatría', 'admin', 'admin123')
  ];
   login(username: string, password: string): Nurse | null {
    const nurse = this.nurses.find(
      n => n.username === username && n.password === password
    );
    return nurse ?? null;
  }

   getNurse():Array<Nurse>{
        return this.nurses;
  }
   register(nurse: Nurse): boolean {

    // Comprobar si el username ya existe
    const exists = this.nurses.some(
      n => n.username === nurse.username
    );

    if (exists) {
      return false; // username duplicado
    }

    // Generar ID automáticamente
    nurse.id = this.nurses.length > 0
      ? Math.max(...this.nurses.map(n => n.id)) + 1
      : 1;

    this.nurses.push(nurse);
    return true;
  }

  getNurse():Array<Nurse>{
        return this.nurses;
    }
}
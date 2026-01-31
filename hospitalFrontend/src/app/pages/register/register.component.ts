import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Nurse } from '../../models/nurse';
import { NurseService } from '../../services/nurse.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nurse: Nurse = new Nurse();

  constructor(
    private nurseService: NurseService,
    private router: Router
  ) { }

  register() {
    this.nurseService.register(this.nurse).subscribe({
      next: () => {
        alert('Registro exitoso, inicia sesión');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);

        if (err.status === 400) {
          alert('Faltan campos obligatorios');
        } else if (err.status === 409) {
          alert('El username ya existe');
        } else {
          alert('Error al registrar el enfermero');
        }
      }
    });
  }
}

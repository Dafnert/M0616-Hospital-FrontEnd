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
  ) {}

  register() {
    const success = this.nurseService.register(this.nurse);

    if (success) {
      alert('Registro exitoso, inicia sesión');
      this.router.navigate(['/login']);
    } else {
      alert('El username ya existe');
    }
  }
}

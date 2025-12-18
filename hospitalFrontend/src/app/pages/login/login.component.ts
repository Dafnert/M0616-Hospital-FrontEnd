import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NurseService } from '../../services/nurse.service';
import { Nurse } from '../../models/nurse';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  loginAttempts = 0;
  isLoading = false;

  loginStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  errorMessage = '';

  errorMessages = [
    'Usuario o contraseña incorrectos',
    'Segundo intento fallido',
    'Último intento',
    'Usuario bloqueado'
  ];

  constructor(
    private _nurseService: NurseService,
    private router: Router
  ) {}

  login() {
    this.isLoading = true;
    this.loginStatus = 'loading';

    setTimeout(() => {
      const nurse: Nurse | null =
        this._nurseService.login(this.username, this.password);

      if (nurse) {
        this.loginStatus = 'success';
        this.errorMessage = `Bienvenido ${nurse.name}`;

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);

      } else {
        this.loginAttempts++;
        this.loginStatus = 'error';
        this.errorMessage =
          this.errorMessages[
            Math.min(this.loginAttempts - 1, this.errorMessages.length - 1)
          ];
      }

      this.isLoading = false;
    }, 1500);
  }

  getStatusColor(): string {
    switch (this.loginStatus) {
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'loading': return '#f59e0b';
      default: return '#6b7280';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
 }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginAttempts: number = 0;
  isLoading: boolean = false;
  loginStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  // Lista de usuarios permitidos (simulación)
  allowedUsers = [
    { username: 'admin', password: 'admin123', role: 'Administrador' },
    { username: 'doctor', password: 'doctor123', role: 'Doctor' },
    { username: 'enfermero', password: 'enfermero123', role: 'Enfermero' }
  ];

  // Mensajes de error según intentos
  errorMessages = [
    '❌ Usuario o contraseña incorrectos',
    '⚠️ Segundo intento fallido. Verifica tus credenciales',
    '🚫 Último intento antes del bloqueo temporal',
    '🔒 Demasiados intentos fallidos.'
  ];

  constructor(private router: Router) {}

  login() {
    this.isLoading = true;
    this.loginStatus = 'loading';
    this.errorMessage = '';

    // Simular delay de autenticación
    setTimeout(() => {
      const user = this.allowedUsers.find(
        u => u.username === this.username && u.password === this.password
      );

      if (user) {
        this.loginStatus = 'success';
        this.errorMessage = `✅ Bienvenido ${user.role}`;
        
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.loginStatus = 'error';
        this.loginAttempts++;
        
        if (this.loginAttempts >= this.errorMessages.length) {
          this.errorMessage = this.errorMessages[this.errorMessages.length - 1];
        } else {
          this.errorMessage = this.errorMessages[this.loginAttempts - 1];
        }
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

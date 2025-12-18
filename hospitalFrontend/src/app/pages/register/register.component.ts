import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  constructor(private nurseService: NurseService) {}

  register() {
    this.nurseService.register(this.nurse);
  }
}

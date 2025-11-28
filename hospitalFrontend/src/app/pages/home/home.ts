import { Component } from '@angular/core';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLinkActive]
})
export class HomeComponent {
  title="HealthCare Connect"
  login=""
  nurses=""
}

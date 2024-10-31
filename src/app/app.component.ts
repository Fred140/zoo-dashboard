import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashzooComponent } from './dashzoo/dashzoo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashzooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zoo-dashboard';
}

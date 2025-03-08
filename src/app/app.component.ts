import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tailwind4Component } from './tailwind4/tailwind4.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tailwind4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular19-tailwind4';
}

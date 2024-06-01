import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigations} from "./common-components/navigations/navigations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-advanced';
}

import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AboutRoutingModule} from "./about-routing.module";

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AboutRoutingModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

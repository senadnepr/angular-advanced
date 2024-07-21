import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'navigations',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss'
})
export class Navigations {

}

import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'navigations',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss'
})
export class Navigations {

}

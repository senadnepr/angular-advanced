import { Component } from '@angular/core';
import {Navigations} from "../../../common-components/navigations/navigations.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'custom-routing',
  standalone: true,
  imports: [
    Navigations,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './custom-routing.component.html',
  styleUrl: './custom-routing.component.scss'
})
export class CustomRouting {

}

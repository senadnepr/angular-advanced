import { Component } from '@angular/core';

@Component({
  selector: 'app-notstandalone',
  templateUrl: './notstandalone.component.html',
  styleUrl: './notstandalone.component.scss',
  standalone: false
})
export class NotstandaloneComponent {

  name: string = 'notstandalone';

}

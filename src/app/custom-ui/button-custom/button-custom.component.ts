import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'button-custom',
  standalone: true,
  imports: [],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.scss'
})
export class ButtonCustomComponent {

  @Output() click = new EventEmitter();

  public onClick(event: Event)
  {
    this.click.emit(event);
  }
}

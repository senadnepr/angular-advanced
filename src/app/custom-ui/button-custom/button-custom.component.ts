import {Component, Input} from '@angular/core';

@Component({
  selector: 'button-custom',
  standalone: true,
  imports: [],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.scss'
})
export class ButtonCustomComponent {

@Input()
  customClick: Function | null = click();

  handleClick(){
    this.customClick();
  }
}

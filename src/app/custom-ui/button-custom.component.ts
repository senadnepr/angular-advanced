import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'button-custom',
  standalone: true,
  imports: [],
  template: `
    <button class="{{classIn}}">
      <span>
        {{ title }}
      </span>
    </button>
  `,
})

export class ButtonCustomComponent implements OnInit{

  @Input() title: string | undefined = "button-custom";

  @Input() class: string | undefined = "";

  classIn: string = "";

  ngOnInit(): void {
    this.classIn = this.class + ' button-custom';
    console.log(this.classIn);
  }
}

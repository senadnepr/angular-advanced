import { Component } from '@angular/core';
import {Lesson03Module} from "../../lesson03/lesson03-module/lesson03.module";

@Component({
  selector: 'products',
  standalone: true,
  imports: [Lesson03Module],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


}

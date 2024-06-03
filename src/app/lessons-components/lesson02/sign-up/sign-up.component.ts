import { Component } from '@angular/core';
import {UserService} from "../../../user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  public password: string = "";
  public email: string = "";
  public isHidden: boolean = true;

  constructor(private _userService: UserService) {
  }

  public login(): void {
    if(this.email === ""){
      alert("Please enter a valid email");
    } else if(this.password === ""){
      alert("Please enter a valid password");
    } else {
      this._userService.login();
      this.isHidden = false;
    }
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn = new BehaviorSubject<boolean>(false)

  constructor() { }

  public login(){
    this.isLoggedIn.next(true);
  }
}

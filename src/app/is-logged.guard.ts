import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./user.service";

export const isLoggedGuard: CanActivateFn = (route, state) => {
  return inject(UserService).isLoggedIn;
};

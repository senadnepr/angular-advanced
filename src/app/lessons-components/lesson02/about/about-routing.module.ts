import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {InfoComponent} from "./info/info.component";

export const routes: Routes = [
    {
      path: 'contacts',
      component: ContactsComponent
    },
    {
      path: 'info',
      component: InfoComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }

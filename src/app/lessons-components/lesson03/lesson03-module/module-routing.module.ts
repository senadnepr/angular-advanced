import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StandaloneComponent} from "../standalone/standalone.component";
import {NotstandaloneComponent} from "../notstandalone/notstandalone.component";

export const routes: Routes = [
  {
    path: 'notstandalone',
    component: NotstandaloneComponent
  },
  {
    path: 'standalone',
    component: StandaloneComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule {
}

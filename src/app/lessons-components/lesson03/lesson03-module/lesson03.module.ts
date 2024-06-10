import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Modules} from "../modules/modules.component";
import {NotstandaloneComponent} from "../notstandalone/notstandalone.component";
import {StandaloneComponent} from "../standalone/standalone.component";
import {ModuleRoutingModule} from "./module-routing.module";
import {CapitalizePipe} from "./capitalize.pipe";


@NgModule({
  declarations: [NotstandaloneComponent, CapitalizePipe],
  imports: [
    CommonModule,
    Modules,
    StandaloneComponent,
    ModuleRoutingModule
  ],
  exports: [
    StandaloneComponent,
    CapitalizePipe,
    NotstandaloneComponent,
  ]
})
export class Lesson03Module {
}

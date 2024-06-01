import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {EmptyRoute} from "./common-components/empty-route/empty-route.component";
import {Rxjs} from "./lessons-components/lesson01/rxjs/rxjs.component";
import {Modules} from "./lessons-components/lesson03/modules/modules.component";
import {CustomRouting} from "./lessons-components/lesson02/custom-routing/custom-routing.component";

export const routes: Routes = [
  {
    path: 'rxjs',
    component: Rxjs
  },
  {
    path: 'custom-routing',
    component: CustomRouting
  },
  {
    path: 'modules',
    component: Modules
    // loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
  },
  {
    path:"", redirectTo: "rxjs", pathMatch: 'full'
  },
  {
    path: '**',
    component: EmptyRoute
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

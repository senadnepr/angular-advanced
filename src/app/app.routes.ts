import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {EmptyRoute} from "./common-components/empty-route/empty-route.component";
import {Rxjs} from "./lessons-components/lesson01/rxjs/rxjs.component";
import {Modules} from "./lessons-components/lesson03/modules/modules.component";
import {CustomRouting} from "./lessons-components/lesson02/custom-routing/custom-routing.component";
import {HomeComponent} from "./lessons-components/lesson02/home/home.component";
import {AboutComponent} from "./lessons-components/lesson02/about/about.component";
import {ProductsComponent} from "./lessons-components/lesson02/products/products.component";
import {PricingComponent} from "./lessons-components/lesson02/pricing/pricing.component";
import {SignUpComponent} from "./lessons-components/lesson02/sign-up/sign-up.component";
import {isLoggedGuard} from "./is-logged.guard";
import {Lesson03Module} from "./lessons-components/lesson03/lesson03-module/lesson03.module";


export const routes: Routes = [
  {
    path: 'rxjs',
    component: Rxjs
  },
  {
    path: 'custom-routing',
    component: CustomRouting,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'home/:id',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'pricing',
        component: PricingComponent,
        canActivate: [isLoggedGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
        loadChildren: () => import('./lessons-components/lesson02/about/about-routing.module')
          .then((m) => m.AboutRoutingModule)

        // children: [
        //   {
        //     path: 'contacts',
        //     component: ContactsComponent
        //   },
        //   {
        //     path: 'info',
        //     component: InfoComponent
        //   }
        // ]
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canDeactivate: [isLoggedGuard]
      },
    ]
  },
  {
    path: 'modules', loadComponent: () =>
      import('./lessons-components/lesson03/modules/modules.component')
        .then((m) => m.Modules),
    loadChildren: () => import('./lessons-components/lesson03/lesson03-module/lesson03.module')
      .then((m) => m.Lesson03Module)

  },
  {
    path: "", redirectTo: "rxjs", pathMatch: 'full'
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

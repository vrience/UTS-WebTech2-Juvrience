import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:"",
    component: FirstComponent
  },
  {
    path:"first",
    component: FirstComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

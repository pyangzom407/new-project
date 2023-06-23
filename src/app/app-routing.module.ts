import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import {CategoriesComponent} from "./shared/categories/categories.component";
import {AboutUsComponent} from "./shared/about-us/about-us.component";

const routes: Routes = [
  {
    path:'',
    component: HeaderComponent,
  },
  {
    path: 'category',
    component: CategoriesComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

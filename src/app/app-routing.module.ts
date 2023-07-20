import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./shared/categories/categories.component";
import {AboutUsComponent} from "./shared/about-us/about-us.component";
import { HomeComponent } from './shared/home/home.component';
import {SellComponent} from "./shared/sell/sell.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoriesComponent
  },
  {
    path: 'sell',
    component: SellComponent
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

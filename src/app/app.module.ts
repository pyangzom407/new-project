import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { CommonButtonComponent } from './shared/common-button/common-button.component';
import {FooterComponent} from "./shared/footer/footer.component";
import { CategoriesComponent } from './shared/categories/categories.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CommonButtonComponent,
    FooterComponent,
    CategoriesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

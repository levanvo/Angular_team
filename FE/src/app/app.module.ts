import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebPageComponent } from './web-page/web-page.component';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './web-page/body/body.component';
import { CategoryComponent } from './web-page/category/category.component';
import { BlogComponent } from './web-page/blog/blog.component';
import { ContactComponent } from './web-page/contact/contact.component';
import { CartComponent } from './web-page/cart/cart.component';
import { LoginComponent } from './admin/login/login.component';
import { LogupComponent } from './admin/logup/logup.component'; 
import { DetailsPrComponent } from './web-page/details-pr/details-pr.component';

@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    AdminComponent,
    BodyComponent,
    CategoryComponent,
    BlogComponent,
    ContactComponent,
    CartComponent,
    DetailsPrComponent,
    LoginComponent,
    LogupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

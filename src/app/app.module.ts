import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { ProductComponent } from './Page/Product/product/product.component';
import { AuthComponent } from './Page/Auth/auth/auth.component';
import { CategoryComponent } from './Page/Category/category/category.component';
import { AddProductComponent } from './Page/Product/add-product/add-product.component';
import { UpdateProductComponent } from './Page/Product/update-product/update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './Page/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './Page/Category/update-category/update-category.component';
import { AddAuthComponent } from './Page/Auth/add-auth/add-auth.component';
import { UpdateAuthComponent } from './Page/Auth/update-auth/update-auth.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,

    DashbroadComponent,
    ProductComponent,
    AuthComponent,
    CategoryComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AddAuthComponent,
    UpdateAuthComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { ProductComponent } from './Page/Product/product/product.component';
import { CategoryComponent } from './Page/Category/category/category.component';
import { AuthComponent } from './Page/Auth/auth/auth.component';
import { AddProductComponent } from './Page/Product/add-product/add-product.component';
import { UpdateProductComponent } from './Page/Product/update-product/update-product.component';
import { AddCategoryComponent } from './Page/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './Page/Category/update-category/update-category.component';
import { AddAuthComponent } from './Page/Auth/add-auth/add-auth.component';
import { UpdateAuthComponent } from './Page/Auth/update-auth/update-auth.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminPageComponent, children: [
      { path: '', redirectTo: 'dashbroad', pathMatch: 'full' },
      { path: 'dashbroad', component: DashbroadComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id/edit', component: UpdateProductComponent },
      { path: 'addpro', component: AddProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/:id/edit', component: UpdateCategoryComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'auth/:id/edit', component: UpdateAuthComponent },
      { path: 'addauth', component: AddAuthComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

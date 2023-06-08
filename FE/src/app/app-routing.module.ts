import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageComponent } from './web-page/web-page.component';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './web-page/body/body.component';
import { CategoryComponent } from './web-page/category/category.component';
import { BlogComponent } from './web-page/blog/blog.component';
import { ContactComponent } from './web-page/contact/contact.component';
import { CartComponent } from './web-page/cart/cart.component';
import { DetailsPrComponent } from './web-page/details-pr/details-pr.component';
import { SigninUpComponent } from './web-page/signin-up/signin-up.component';

const routes: Routes = [
  {path:"",component:WebPageComponent,children:[
    {path:"",component:BodyComponent},
    {path:"category/:id",component:CategoryComponent},
    {path:"blog/:id",component:BlogComponent},
    {path:"contact/:id",component:ContactComponent},
    {path:"cart/:id",component:CartComponent},
    {path:"details/:id",component:DetailsPrComponent},
    {path:"signin_up",component:SigninUpComponent},
  ]},
  {path:"admin/:id",component:AdminComponent,children:[
    
  ]},
  {path:"**",component:WebPageComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

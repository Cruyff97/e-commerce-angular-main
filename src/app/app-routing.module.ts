import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products', loadChildren:() => import('./products/products.module').then(m=>m.ProductsModule)
  },
  {path:'products', loadChildren:() => import('./products/products.module').then(m=>m.ProductsModule)},
{path:'', component: HomeComponent},
{path:'cart', component: CartComponent},
{path:'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

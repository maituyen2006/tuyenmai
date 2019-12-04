import { Routes, RouterModule, Router } from '@angular/router';
import { HomeClientComponent } from 'app/components/home-client/home-client.component';
import { ProductsClientComponent } from 'app/components/products-client/products-client.component';
import { ContactClientComponent } from 'app/components/contact-client/contact-client.component';
import { CartComponent } from 'app/components/cart/cart.component';
import { AboutClientComponent } from 'app/components/about-client/about-client.component';
import { BlogClientComponent } from 'app/components/blog-client/blog-client.component';
import { ProductsDetailClientComponent } from 'app/components/products-detail-client/products-detail-client.component';
import { CategoryProductComponent } from 'app/components/category-product/category-product.component';




export const  ClinentLayoutRoutes: Routes = [
    { path: 'home',      component: HomeClientComponent },
    { path: 'products',   component: ProductsClientComponent},
    { path: 'contact',   component: ContactClientComponent},
    { path: 'cart',   component: CartComponent},
    { path: 'about',   component: AboutClientComponent},
    { path: 'blog',   component: BlogClientComponent},
    {path:'products-detail/:id', component: ProductsDetailClientComponent},
    {path:'category-product/:name', component: CategoryProductComponent}

];
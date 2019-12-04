import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClinentLayoutRoutes } from './clinent-layout.routing';
import { HomeClientComponent } from 'app/components/home-client/home-client.component';
import { ProductsClientComponent } from 'app/components/products-client/products-client.component';

import { SlideClientComponent } from 'app/components/slide-client/slide-client.component';
import { Banner1ClientComponent } from 'app/components/banner1-client/banner1-client.component';
import { Banner2ClientComponent } from 'app/components/banner2-client/banner2-client.component';
import { NewClientComponent } from 'app/components/new-client/new-client.component';
import { BannerVideoClientComponent } from 'app/components/banner-video-client/banner-video-client.component';
import { FollowClientComponent } from 'app/components/follow-client/follow-client.component';
import { ShoppingClientComponent } from 'app/components/shopping-client/shopping-client.component';
import { ContactClientComponent } from 'app/components/contact-client/contact-client.component';
import { CartComponent } from 'app/components/cart/cart.component';
import { AboutClientComponent } from 'app/components/about-client/about-client.component';
import { BlogClientComponent } from 'app/components/blog-client/blog-client.component';
import { MaterialModule } from '../../shared/material.module';
import { ProductsDetailClientComponent } from 'app/components/products-detail-client/products-detail-client.component';
import { CategoryProductComponent } from 'app/components/category-product/category-product.component';
import { ConvertPipe } from 'app/pipe/convert.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const LAYOUT_COMPONENTS =[HomeClientComponent,  ProductsClientComponent,  SlideClientComponent,  Banner1ClientComponent,
  Banner2ClientComponent,  NewClientComponent,  BannerVideoClientComponent,  FollowClientComponent,  ShoppingClientComponent,
  ContactClientComponent,  CartComponent,  AboutClientComponent,  BlogClientComponent,  ProductsDetailClientComponent,CategoryProductComponent,ConvertPipe];
const ENTRY_COMPONENTS =[]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClinentLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [ LAYOUT_COMPONENTS, ENTRY_COMPONENTS  
   
  ]
})
  export class ClinentLayoutModule {}
  
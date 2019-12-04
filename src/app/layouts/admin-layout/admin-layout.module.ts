import { NgModule } from '@angular/core';
import { RouterModule, ɵROUTER_PROVIDERS } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'app/pages/home/home.component';
import { BanghangComponent } from 'app/pages/banghang/banghang.component';
import { ProductsComponent } from 'app/pages/products/products.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { MaterialModule } from '../../shared/material.module';
import { ProductInsertComponent } from 'app/dialog/product-insert/product-insert.component';
import { ProductEditComponent } from 'app/dialog/product-edit/product-edit.component';
import { CategoryInsertComponent } from 'app/dialog/category-insert/category-insert.component';
import { CategoryEditComponent } from 'app/dialog/category-edit/category-edit.component';
import { SupplierComponent } from 'app/pages/supplier/supplier.component';
import { SalesoderComponent } from 'app/pages/salesoder/salesoder.component';
import { PurchasesoderComponent } from 'app/pages/purchasesoder/purchasesoder.component';
import { InvoiceComponent } from 'app/pages/invoice/invoice.component';
import { AccountComponent } from 'app/pages/account/account.component';
import { AccountDetailComponent } from 'app/dialog/account-detail/account-detail.component';
import { AccountInsertComponent } from 'app/dialog/account-insert/account-insert.component';
import { AccountEditComponent } from 'app/dialog/account-edit/account-edit.component';
import { SupplierInsertComponent } from 'app/dialog/supplier-insert/supplier-insert.component';
import { SupplierEditComponent } from 'app/dialog/supplier-edit/supplier-edit.component';
import { VerifiedGuard } from './guard/verified.guard';
import { AuthGuard } from 'app/dialog/login/auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'app/interceptor/request.interceptor';
import { CommentComponent } from 'app/pages/comment/comment.component';
import { ProductStatisticsComponent } from 'app/pages/product-statistics/product-statistics.component';
import { RevenueStatisticsComponent } from 'app/pages/revenue-statistics/revenue-statistics.component';
import { SupplierBillComponent } from 'app/pages/supplier-bill/supplier-bill.component';
import { SalesoderDetailComponent } from 'app/dialog/salesoder-detail/salesoder-detail.component';




const LAYOUT_COMPONENTS =[HomeComponent,  BanghangComponent,  ProductsComponent,  CategoryComponent,  DashboardComponent,
  UserComponent,  TableComponent,  TypographyComponent,  IconsComponent,  MapsComponent,  NotificationsComponent,
  SupplierComponent, SalesoderComponent, PurchasesoderComponent, InvoiceComponent, AccountComponent, AccountDetailComponent,
  CommentComponent, ProductStatisticsComponent,RevenueStatisticsComponent, SupplierBillComponent];

const ENTRY_COMPONENTS = [ProductInsertComponent, ProductEditComponent, CategoryInsertComponent, CategoryEditComponent, AccountInsertComponent,
  AccountEditComponent, SupplierInsertComponent,SalesoderDetailComponent,
  SupplierEditComponent]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(AdminLayoutRoutes),
    FormsModule, NgbModule, MaterialModule, ReactiveFormsModule,

  ],
  declarations: [LAYOUT_COMPONENTS, ENTRY_COMPONENTS,
  ],
  entryComponents: [LAYOUT_COMPONENTS, ENTRY_COMPONENTS],
  providers: [VerifiedGuard],
  
})

export class AdminLayoutModule { }

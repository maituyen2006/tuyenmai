import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { BanghangComponent } from 'app/pages/banghang/banghang.component';
import { ProductsComponent } from 'app/pages/products/products.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { AccountComponent } from 'app/pages/account/account.component';
import { SupplierComponent } from 'app/pages/supplier/supplier.component';
import { SalesoderComponent } from 'app/pages/salesoder/salesoder.component';
import { PurchasesoderComponent } from 'app/pages/purchasesoder/purchasesoder.component';
import { InvoiceComponent } from 'app/pages/invoice/invoice.component';
import { VerifiedGuard } from './guard/verified.guard';
import { AdminLayoutComponent } from './admin-layout.component';
import { CommentComponent } from 'app/pages/comment/comment.component';
import { ProductStatisticsComponent } from 'app/pages/product-statistics/product-statistics.component';
import { RevenueStatisticsComponent } from 'app/pages/revenue-statistics/revenue-statistics.component';
import { SupplierBillComponent } from 'app/pages/supplier-bill/supplier-bill.component';

export const AdminLayoutRoutes: Routes = [
    // {path: 'admin', component: AdminLayoutComponent,  
    // // canActivate: [VerifiedGuard] ,
    //     children: [
            {  path: '',  redirectTo: 'home-manage',  pathMatch: 'full', },
            { path: 'home-manage',      component: HomeComponent },
            { path: 'banhang-manage',           component: BanghangComponent },
            { path: 'products-manage',           component: ProductsComponent },
            { path: 'category-manage',           component: CategoryComponent },
            { path: 'account-manage',           component: AccountComponent },
            { path: 'comment-manage',           component: CommentComponent },       
            { path: 'supplier-manage',           component: SupplierComponent },
            { path: 'saleroder-manage',           component: SalesoderComponent },
            { path: 'purchases-manage',           component: PurchasesoderComponent },
            { path: 'invoice-manage',           component: InvoiceComponent },
            { path: 'supplierBill-manage',           component: SupplierBillComponent },
            { path: 'productStatistics-manage',           component: ProductStatisticsComponent },
            { path: 'revenueStatistics-manage',           component: RevenueStatisticsComponent },
            { path: 'user-manage',           component: UserComponent },
            { path: 'table-manage',          component: TableComponent },
            { path: 'typography-manage',     component: TypographyComponent },
            { path: 'icons-manage',          component: IconsComponent },
            { path: 'maps-manage',           component: MapsComponent },
            { path: 'notifications-manage',  component: NotificationsComponent },
            { path: 'account-manage',  component: AccountComponent},
    
        // ]
    // }

    
  
];
    

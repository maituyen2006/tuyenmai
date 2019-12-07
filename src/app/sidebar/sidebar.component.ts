import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin/home-manage',     title: 'Home',         icon:'nc-bank',       class: '' },
    { path: '/admin/banhang-manage',     title: 'Bán Hàng',         icon:'nc-money-coins',       class: '' },    
    { path: '/admin/account-manage',     title: 'Tài Khoản',         icon:'nc-single-02',       class: '' },
    { path: '/admin/comment-manage',     title: 'Bình Luận',         icon:'nc-chat-33',       class: '' },    
    { path: '/admin/saleroder-manage',          title: 'Đơn Hàng',      icon:'nc-basket',  class: '' },
    { path: '/admin/invoice-manage',          title: 'Hóa Đơn',      icon:'nc-single-copy-04',  class: '' },   
    { path: '/admin/products-manage',     title: 'Sản Phẩm',         icon:'nc-shop',       class: '' },
    { path: '/admin/category-manage',     title: 'Danh Mục',         icon:'nc-tile-56',       class: '' },
    { path: '/admin/supplier-manage',          title: 'Nhà Cung Cấp',      icon:'nc-diamond',  class: '' },
    { path: '/admin/supplierBill-manage',          title: 'Hóa Đơn NCC',      icon:'nc-single-copy-04',  class: '' },   
    { path: '/admin/productStatistics-manage',          title: 'Thống Kê Sản Phẩm',      icon:'nc-chart-bar-32',  class: '' },
    { path: '/admin/revenueStatistics-manage',          title: 'Thống Kê Doanh Thu',      icon:'nc-chart-bar-32',  class: '' },
    { path: '/admin/bannerComponent-manage',          title: 'Thay ảnh',              icon:'nc-album-2',      class: '' },
    { path: '/admin/icons-manage',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/notifications-manage', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user-manage',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table-manage',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography-manage',    title: 'Typography',        icon:'nc-caps-small', class: '' },
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

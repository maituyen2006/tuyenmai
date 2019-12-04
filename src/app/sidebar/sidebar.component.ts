import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home-manage',     title: 'Home',         icon:'nc-bank',       class: '' },
    { path: '/banhang-manage',     title: 'Bán Hàng',         icon:'nc-money-coins',       class: '' },    
    { path: '/account-manage',     title: 'Tài Khoản',         icon:'nc-single-02',       class: '' },
    { path: '/comment-manage',     title: 'Bình Luận',         icon:'nc-chat-33',       class: '' },    
    { path: '/saleroder-manage',          title: 'Đơn Hàng',      icon:'nc-basket',  class: '' },
    { path: '/invoice-manage',          title: 'Hóa Đơn',      icon:'nc-single-copy-04',  class: '' },
    { path: '/supplierBill-manage',          title: 'Hóa Đơn NCC',      icon:'nc-single-copy-04',  class: '' },
    { path: '/products-manage',     title: 'Sản Phẩm',         icon:'nc-shop',       class: '' },
    { path: '/category-manage',     title: 'Danh Mục',         icon:'nc-tile-56',       class: '' },
    { path: '/supplier-manage',          title: 'Nhà Cung Cấp',      icon:'nc-diamond',  class: '' },
    // { path: '/purchases-manage',          title: 'Đặt Hàng',      icon:'nc-ambulance',  class: '' },
    { path: '/productStatistics-manage',          title: 'Thống Kê Sản Phẩm',      icon:'nc-chart-bar-32',  class: '' },
    { path: '/revenueStatistics-manage',          title: 'Thống Kê Doanh Thu',      icon:'nc-chart-bar-32',  class: '' },
    { path: '/icons-manage',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps-manage',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
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

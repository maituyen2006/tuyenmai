import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClinentLayoutComponent} from './layouts/clinent-layout/clinent-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { VerifiedGuard } from './layouts/admin-layout/guard/verified.guard';




export const AppRoutes: Routes = [

  {  path: '',  redirectTo: 'home',  pathMatch: 'full', },
  {    path: '',  component: ClinentLayoutComponent,
      children: [
        {     path: '',   loadChildren: './layouts/clinent-layout/clinent-layout.module#ClinentLayoutModule',
  }]},
  { 
    path: '',  component: AdminLayoutComponent, 
    // canActivate: [VerifiedGuard] ,
    children: [
        {
      path: '',  loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
 
  }]},
  {  path: '',    component: LoginLayoutComponent,
    children: [
        {      path: '',   loadChildren: './layouts/login-layout/login-layout.module#LoginLayoutModule',

  }]},
  {  path: '**',   redirectTo: 'home'
  },

]

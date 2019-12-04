import { Routes } from '@angular/router';
import { LoginComponent } from 'app/dialog/login/login.component';
import { RegisterComponent } from 'app/dialog/register/register.component';

export const LoginLayoutRoutes: Routes = [
   
    { path: 'login' , component: LoginComponent},
    { path: 'register', component: RegisterComponent}
  
];

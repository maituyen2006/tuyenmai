import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../shared/material.module';
import { LoginComponent } from 'app/dialog/login/login.component';
import { LoginLayoutRoutes } from './login-layout.routing';
import { RegisterComponent } from 'app/dialog/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [
   RegisterComponent,
    LoginComponent,
  ]
})

export class LoginLayoutModule {}

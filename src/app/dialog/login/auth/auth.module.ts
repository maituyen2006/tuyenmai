import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';
import { AdminLayoutModule } from '../../../layouts/admin-layout/admin-layout.module';
import { AccountService } from '../../../service/account.service';

@NgModule({
  declarations: [],
    imports: [
        CommonModule, RouterModule, FormsModule
        , MaterialModule,
    ],
    providers: [AccountService]
})
export class AuthModule { }

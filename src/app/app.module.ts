import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClinentLayoutComponent } from './layouts/clinent-layout/clinent-layout.component';
import { FooterClientModule } from './shared/footer-client/footer-client.module';
import { HeaderClientModule } from './shared/header-client/header-client.module';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { VerifiedGuard } from './layouts/admin-layout/guard/verified.guard';






















@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClinentLayoutComponent,
    LoginLayoutComponent,
 
    
   
    


    
      

   
 

    
  ],
  imports: [
      BrowserAnimationsModule,
   
  
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FooterClientModule,
    HeaderClientModule,
    FormsModule,  
    MaterialModule,

  ],
  providers: [VerifiedGuard  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

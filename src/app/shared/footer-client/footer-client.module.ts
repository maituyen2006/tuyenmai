import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterClientComponent } from './footer-client.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterClientComponent ],
    exports: [ FooterClientComponent ]
})

export class FooterClientModule {}

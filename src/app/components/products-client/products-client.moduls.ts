import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsClientComponent } from './products-client.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ ProductsClientComponent ],
    exports: [ ProductsClientComponent ]
})

export class ProductsClientModule {}
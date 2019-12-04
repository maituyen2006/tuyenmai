import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderClientComponent } from './header-client.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ HeaderClientComponent ],
    exports: [ HeaderClientComponent ]
})

export class HeaderClientModule {}

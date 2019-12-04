import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideClientComponent } from './slide-client.component';


@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ SlideClientComponent ],
    exports: [ SlideClientComponent ]
})


export class SlideClientModule {}

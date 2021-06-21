import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayRoutingModule} from '@app/pages/profile/pages/display/display-routing.module';
import {DisplayComponent} from '@app/pages/profile/pages/display/components/display.component';

@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }

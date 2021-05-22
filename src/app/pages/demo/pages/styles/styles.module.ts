import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles.component'
import {StyleRoutingModule} from '@app/pages/demo/pages/styles/styles-routing.module'



@NgModule({
  declarations: [StylesComponent],
  imports: [
    CommonModule,
    StyleRoutingModule
  ]
})
export class StylesModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'

import {SharedComponent} from './shared.component'
import {ButtonsModule, ControlsModule, IndicatorsModule} from '@app/shared';
import {SharedRoutingModule} from '@app/pages/demo/pages/shared/shared-routing.module'

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    ControlsModule,
    IndicatorsModule
  ]
})
export class SharedModule { }

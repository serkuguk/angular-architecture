import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {ProfessionalComponent} from '@app/pages/profile/pages/form/components/professional/professional.component';

@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ProfessionalComponent]
})
export class ProfessionalModule { }

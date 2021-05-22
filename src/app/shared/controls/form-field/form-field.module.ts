import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormFieldComponent} from '@app/shared/controls/form-field/form-field.component'

@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [FormFieldComponent]
})
export class FormFieldModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {ProfessionalComponent} from '@app/pages/profile/pages/form/components/professional/professional.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormFieldModule, InputModule, RadiosModule} from '@app/shared';
import { EmployeeComponent } from './roles/employee/employee.component';
import { RecruiterComponent } from './roles/recruiter/recruiter.component';

@NgModule({
  declarations: [ProfessionalComponent, EmployeeComponent, RecruiterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    RadiosModule,
    InputModule
  ],
  providers: [],
  exports: [ProfessionalComponent]
})
export class ProfessionalModule { }

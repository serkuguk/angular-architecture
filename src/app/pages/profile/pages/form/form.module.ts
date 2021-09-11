import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRoutingModule} from '@app/pages/profile/pages/form/form-routing.module'
import {FormComponent} from '@app/pages/profile/pages/form/components/form/form.component';
import {StepperModule} from '@app/pages/profile/pages/form/components/stepper/stepper.module'
import {
  AutocompleteModule,
  ButtonModule,
  CheckboxesModule, DateRangeModule,
  FormFieldModule,
  InputModule,
  RadiosModule,
  SelectModule,
  SpinnerModule
} from '@app/shared';
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module';
import { ExperiencesComponent } from './components/professional/roles/employee/experiences/experiences.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonalComponent} from '@app/pages/profile/pages/form/components/personal/personal.component';
import {ProfessionalComponent} from '@app/pages/profile/pages/form/components/professional/professional.component';
import {UserPhotoModule} from '@app/shared/layout/components/user-photo/user-photo.module';
import {RecruiterComponent} from '@app/pages/profile/pages/form/components/professional/roles/recruiter/recruiter.component';
import {EmployeeComponent} from '@app/pages/profile/pages/form/components/professional/roles/employee/employee.component';
import {MapperService} from '@app/pages/profile/pages/form/services/mapper.service';

@NgModule({
  declarations: [FormComponent,
                 PersonalComponent,
                 ProfessionalComponent,
                 RecruiterComponent,
                 EmployeeComponent,
                 ExperiencesComponent],
  exports: [],
  imports: [
    CommonModule,
    FormRoutingModule,
    StepperModule,
    AutocompleteModule,
    FilesUploadModule,
    SpinnerModule,
    UserPhotoModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    ButtonModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateRangeModule
  ],
  providers: [MapperService]
})
export class FormModule { }

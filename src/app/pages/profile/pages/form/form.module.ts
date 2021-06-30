import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRoutingModule} from '@app/pages/profile/pages/form/form-routing.module'
import {FormComponent} from '@app/pages/profile/pages/form/components/form/form.component';
import {StepperModule} from '@app/pages/profile/pages/form/components/stepper/stepper.module'
import {PersonalModule} from '@app/pages/profile/pages/form/components/personal/personal.module';
import {ProfessionalModule} from '@app/pages/profile/pages/form/components/professional/professional.module';
import {AutocompleteModule, LayoutModule, SpinnerModule} from '@app/shared';
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    StepperModule,
    PersonalModule,
    ProfessionalModule,
    AutocompleteModule,
    FilesUploadModule,
    SpinnerModule
  ]
})
export class FormModule { }

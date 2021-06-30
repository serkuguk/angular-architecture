import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalComponent} from '@app/pages/profile/pages/form/components/personal/personal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AutocompleteModule, FormFieldModule, InputModule, LayoutModule} from '@app/shared';
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module';

@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    FormFieldModule,
    InputModule,
    ReactiveFormsModule,
    FilesUploadModule,
    AutocompleteModule,
    LayoutModule
  ],
  providers: [],
  exports: [PersonalComponent]
})
export class PersonalModule { }

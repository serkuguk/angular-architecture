import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadComponent} from '@app/shared/popups/upload/upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule
  ],
  exports: [UploadComponent]
})
export class UploadModule { }

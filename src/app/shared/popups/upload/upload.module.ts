import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadComponent} from '@app/shared/popups/upload/upload.component';
import {FileSizePipes} from '@app/shared/popups/upload/pipes/file-size.pipes';

@NgModule({
  declarations: [UploadComponent, FileSizePipes],
  imports: [
    CommonModule
  ],
  exports: [UploadComponent]
})
export class UploadModule { }

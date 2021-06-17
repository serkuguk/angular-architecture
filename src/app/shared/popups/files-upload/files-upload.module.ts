import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FilesUploadDirective } from './directives/files-upload.directive'
import { FilesUploadComponent } from './files-upload.component'
import { ImageCropperModule } from 'ngx-image-cropper'
import {MatDialogModule} from '@angular/material/dialog'
import {DropZoneDirective} from '@app/shared/popups/files-upload/directives/drop-zone.directive';



@NgModule({
  declarations: [FilesUploadDirective,
                 DropZoneDirective,
                 FilesUploadComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ImageCropperModule
  ],
  exports: [FilesUploadDirective,
            DropZoneDirective,
            FilesUploadComponent]
})
export class FilesUploadModule { }

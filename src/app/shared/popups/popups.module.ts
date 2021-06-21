import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module'
import {UploadModule} from '@app/shared/popups/upload/upload.module'
import {ImageCropperModule} from 'ngx-image-cropper';

@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        FilesUploadModule,
        ImageCropperModule
    ],
  exports: [FilesUploadModule]
})
export class PopupsModule { }

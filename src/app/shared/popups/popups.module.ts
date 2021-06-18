import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module'
import {UploadModule} from '@app/shared/popups/upload/upload.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilesUploadModule
  ],
  exports: [FilesUploadModule]
})
export class PopupsModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module';
import { UploadComponent } from './upload/upload.component'
import {UploadModule} from '@app/shared/popups/upload/upload.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FilesUploadModule,
    UploadModule
  ],
  exports: [FilesUploadModule]
})
export class PopupsModule { }

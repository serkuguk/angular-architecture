import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {CropperComponent} from '@app/shared/popups/cropper/cropper.component'
import {ImageCropperModule} from 'ngx-image-cropper';

@NgModule({
  declarations: [CropperComponent],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports: [CropperComponent]
})
export class CropperModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPhotoModule} from '@app/shared/layout/components/user-photo/user-photo.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPhotoModule
  ],
  exports: [UserPhotoModule]
})
export class LayoutModule { }

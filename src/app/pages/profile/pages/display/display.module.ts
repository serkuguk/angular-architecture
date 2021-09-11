import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayRoutingModule} from '@app/pages/profile/pages/display/display-routing.module';
import {DisplayComponent} from '@app/pages/profile/pages/display/components/display.component';
import {UserPhotoModule} from '@app/shared/layout/components/user-photo/user-photo.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';

@NgModule({
  declarations: [DisplayComponent, EmployeeComponent, RecruiterComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    UserPhotoModule
  ]
})
export class DisplayModule { }

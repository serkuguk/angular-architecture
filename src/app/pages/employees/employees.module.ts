import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "@app/pages/employees/components/store/reducers";
import {StoreModule} from "@ngrx/store";
import {EmployeesEffects} from "@app/pages/employees/components/store/effects/employees.effects";
import { EmployeeComponent } from './components/employee/employee.component'
import {EmployeesComponent} from "@app/pages/employees/components/employees/employees.component";
import {UserPhotoModule} from "@app/shared/layout/components/user-photo/user-photo.module";

@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature([EmployeesEffects]),
    UserPhotoModule
  ]
})
export class EmployeesModule { }

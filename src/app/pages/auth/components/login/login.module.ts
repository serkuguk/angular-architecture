import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import {LoginComponent} from '@app/pages/auth/components/login/login.component'
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, FormFieldModule, InputModule, PasswordModule, SpinnerModule} from '@app/shared';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    PasswordModule,
    InputModule,
    ButtonModule,
    SpinnerModule
  ]
})
export class LoginModule { }

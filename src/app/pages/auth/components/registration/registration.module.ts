import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {RegistrationComponent} from '@app/pages/auth/components/registration/registration.component';
import {RegistrationRoutingModule} from '@app/pages/auth/components/registration/registration-routing.module';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }

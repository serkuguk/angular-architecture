import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {RegistrationComponent} from '@app/pages/auth/components/registration/registration.component';
import {RegistrationRoutingModule} from '@app/pages/auth/components/registration/registration-routing.module';
import {ButtonModule} from '@app/shared/buttons'
import {SpinnerModule} from '@app/shared/indicators'
import {ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '@app/shared';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
    ControlsModule
  ]
})
export class RegistrationModule { }

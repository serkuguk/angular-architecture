import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {AuthRoutingModule} from './auth-routing.module'
import {UserService} from '@app/pages/auth/services/user.service'

import {reducers} from '@app/shared/dictionary/dictionaries/reducer'
import {RegistrationEffects} from '@app/pages/auth/store/effects/registration.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegistrationEffects])
  ],
  exports: [],
  providers: [UserService]
})
export class AuthModule { }

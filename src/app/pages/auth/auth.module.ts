import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {AuthRoutingModule} from './auth-routing.module'
import {UserService} from '@app/pages/auth/services/user.service'

import {reducers} from "@app/pages/auth/store/reducers"
import {RegistrationEffects} from '@app/pages/auth/store/effects/registration.effects'
import {LoginEffects} from '@app/pages/auth/store/effects/login.effects'
import {LogoutEffects} from "@app/pages/auth/store/effects/logout.effects";
import {UserPhotoModule} from "@app/shared/layout/components/user-photo/user-photo.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UserPhotoModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegistrationEffects, LoginEffects, LogoutEffects])
  ],
  exports: [],
  providers: [UserService]
})
export class AuthModule { }

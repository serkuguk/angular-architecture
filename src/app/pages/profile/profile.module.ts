import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {ProfileRoutingModule} from '@app/pages/profile/profile-routing.module';
import {StoreModule} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects'
import {ProfileEffects} from '@app/pages/profile/pages/form/store/effects/profile.effects'
import {reducers} from "@app/pages/profile/pages/form/store/reducers";
import {CreateUserEffects} from "@app/pages/profile/pages/form/store/effects/create_user.effects";
import {UpdateUserEffects} from "@app/pages/profile/pages/form/store/effects/update_user.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects, CreateUserEffects, UpdateUserEffects])
  ]
})
export class ProfileModule { }

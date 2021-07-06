import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {ProfileRoutingModule} from '@app/pages/profile/profile-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@app/shared/dictionary/dictionaries/reducer';
import {EffectsModule} from '@ngrx/effects'
import {ProfileEffects} from '@app/pages/profile/pages/form/store/effects/profile.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfileModule { }

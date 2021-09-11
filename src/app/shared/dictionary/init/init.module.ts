import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {InitEffects} from "@app/shared/dictionary/init/effects/init.effects";
import {reducers} from "@app/shared/dictionary/init/reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('init', reducers),
    EffectsModule.forFeature([InitEffects])
  ],
  providers: [],
  exports: []
})
export class InitModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from '@app/shared/dictionary/dictionaries/reducer'
import {DictionariesEffects} from '@app/shared/dictionary/dictionaries/effects/dictionaries.effects'
import {DictionaryService} from '@app/shared/dictionary/services/dictionary.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dictionary', reducers),
    EffectsModule.forFeature([DictionariesEffects])
  ],
  providers: [DictionaryService],
  exports: []
})
export class DictionaryModule { }

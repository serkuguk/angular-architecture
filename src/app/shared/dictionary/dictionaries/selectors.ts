import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '@app/shared/types/store/app-state-interface'
import {DictionaryStateInterface} from '@app/shared/dictionary/dictionaries/types/dictionary-state-interface'
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface'

export const dictionarySelector = createFeatureSelector<AppStateInterface, DictionaryStateInterface>('dictionary')

export const getDictionariesSelector = createSelector(
  dictionarySelector,
  (state: DictionaryStateInterface) => state.entities
)

export const getLoadingSelector = createSelector(
  dictionarySelector,
  (state: DictionaryStateInterface) => state.loading
)

export const getIsReadySelector = createSelector(
  dictionarySelector,
  (state: DictionaryStateInterface) => state.entities && !state.loading
)

export const getRolesSelector = createSelector(
  getDictionariesSelector,
  (state: DictionariesInterface) => state.roles
)

export const getQualificationsSelector = createSelector(
  getDictionariesSelector,
  (state: DictionariesInterface) => state.qualifications
)

export const getSkillsSelector = createSelector(
  getDictionariesSelector,
  (state: DictionariesInterface) => state.skills
)

export const getSpecializationsSelector = createSelector(
  getDictionariesSelector,
  (state: DictionariesInterface) => state.specializations
)

export const getErrorSelector = createSelector(
  dictionarySelector,
  (state: DictionaryStateInterface) => state.error
)

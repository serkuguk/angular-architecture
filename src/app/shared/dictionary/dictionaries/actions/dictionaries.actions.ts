import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/shared/dictionary/dictionaries/actionTypes'
import {DictionariesInterface} from '@app/shared/dictionary/types/dictionaries-interface'

export const dictionariesActions = createAction(
  ActionTypes.READ
)

export const dictionariesSuccessActions = createAction(
  ActionTypes.READ_SUCCESS,
  props<{dictionaries: DictionariesInterface}>()
)

export const dictionariesFailureActions = createAction(
  ActionTypes.READ_FAILURE,
  props<{errors: string}>()
)

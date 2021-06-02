import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/shared/store/dictionaries/actionTypes'

export const dictionariesActions = createAction(
  ActionTypes.READ,
  props<{request: any}>()
)

export const dictionariesSuccessActions = createAction(
  ActionTypes.READ_SUCCESS,
  props<{request: any}>()
)

export const dictionariesFailureActions = createAction(
  ActionTypes.READ_FAILURE,
  props<{request: any}>()
)

import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/auth/store/actionTypes'


export const logoutActions = createAction(
  ActionTypes.SIGN_OUT
)

export const logoutSuccessActions = createAction(
  ActionTypes.SIGN_OUT_SUCCESS
)

export const logoutFailureActions = createAction(
  ActionTypes.SIGN_OUT_FAILURE,
  props<{error: string}>()
)



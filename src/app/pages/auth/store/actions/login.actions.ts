import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/auth/store/actionTypes'


export const loginActions = createAction(
  ActionTypes.SIGN_IN_EMAIL,
  props<{request: any}>()
)

export const loginSuccessActions = createAction(
  ActionTypes.SIGN_IN_EMAIL_SUCCESS,
  props<{currentUser: any}>()
)

export const loginFailureActions = createAction(
  ActionTypes.SIGN_IN_EMAIL_FAILURE,
  props<{error: string}>()
)

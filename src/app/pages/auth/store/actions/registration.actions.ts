import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/auth/store/actionTypes'
import {EmailPasswordCredentialsInterface} from '@app/pages/auth/types/email-password-credentials-interface';


export const registrationActions = createAction(
  ActionTypes.SIGN_UP_EMAIL,
  props<{request: EmailPasswordCredentialsInterface}>()
)

export const registrationSuccessActions = createAction(
  ActionTypes.SIGN_UP_EMAIL_SUCCESS,
  props<{currentUser: any}>()
)

export const registrationFailureActions = createAction(
  ActionTypes.SIGN_UP_EMAIL_FAILURE,
  props<{error: string}>()
)

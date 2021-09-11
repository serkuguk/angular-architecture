import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@app/pages/profile/pages/form/store/actionTypes';
import {EmailPasswordCredentialsInterface} from '@app/pages/auth/types/email-password-credentials-interface';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';


export const userCreateActions = createAction(
  ActionTypes.CREATE,
  props<{user: EmailPasswordCredentialsInterface}>()
)

export const userCreateSuccessActions = createAction(
  ActionTypes.CREATE_SUCCESS,
  props<{user: UserInterface}>()
)

export const userCreateErrorActions = createAction(
  ActionTypes.CREATE_ERROR,
  props<{error: string}>()
)

//Update
export const userUpdateActions = createAction(
  ActionTypes.UPDATE,
  props<{user: UserInterface}>()
)

export const userUpdateSuccessActions = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{user: UserInterface}>()
)

export const userUpdateErrorActions = createAction(
  ActionTypes.UPDATE_ERROR,
  props<{error: string}>()
)

//Read
export const userReadActions = createAction(
  ActionTypes.READ,
  props<{id: string}>()
)

export const readSuccessActions = createAction(
  ActionTypes.READ_SUCCESS,
  props<{user: any}>()
)

export const readErrorActions = createAction(
  ActionTypes.READ_ERROR,
  props<{error: string}>()
)

export const readClearActions = createAction(
  ActionTypes.READ_ERROR
)


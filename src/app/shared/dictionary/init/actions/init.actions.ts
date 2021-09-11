import {createAction, props} from '@ngrx/store'

import {UserStateInterface} from '@app/pages/auth/types/user-state-interface';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {ActionTypes} from "@app/shared/dictionary/init/actionTypes";

export const initActions = createAction(
  ActionTypes.INIT
)

export const initAuthorizedActions = createAction(
  ActionTypes.INIT_AUTHORIZED,
  props<{uid: any, currentUser: any}>()
)

export const initUnAuthorizedActions = createAction(
  ActionTypes.INIT_UNAUTHORIZED
)

export const initFailureActions = createAction(
  ActionTypes.INIT_FAILURE,
  props<{error: string}>()
)

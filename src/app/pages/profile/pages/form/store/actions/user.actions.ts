import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@app/pages/profile/pages/form/store/actionTypes';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';

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


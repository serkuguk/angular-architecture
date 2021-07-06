import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/profile/pages/form/store/actionTypes';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';

export const setProfileActions = createAction(
  ActionTypes.SET_PROFILE,
  props<{form: ProfileFormInterface}>()
)

export const updateProfileActions = createAction(
  ActionTypes.UPDATE_PROFILE,
  props<{changes: any}>()
)

export const clearProfileActions = createAction(
  ActionTypes.CLEAR_PROFILE
)


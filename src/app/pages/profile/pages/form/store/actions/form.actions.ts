import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/profile/pages/form/store/actionTypes';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';
import {PersonalFormInterface} from "@app/pages/profile/pages/form/types/personal-form-interface";
import {ProfessionalFormInterface} from "@app/pages/profile/pages/form/types/professional-form-interface";

export const setProfileActions = createAction(
  ActionTypes.SET_PROFILE,
  props<{form: ProfileFormInterface}>()
)

export const updateProfileActions = createAction(
  ActionTypes.UPDATE_PROFILE,
  props<{changes: PersonalFormInterface | ProfessionalFormInterface}>()
)

export const clearProfileActions = createAction(
  ActionTypes.CLEAR_PROFILE
)


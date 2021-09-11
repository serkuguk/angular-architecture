import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '@app/shared/types/store/app-state-interface'
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface'

export const profileFormStateSelector = createFeatureSelector<AppStateInterface, ProfileFormInterface>('profile')

export const getFromState = createSelector(
  profileFormStateSelector,
  (state: any) => state.form
)

export const getProfessionalForm = createSelector(
  getFromState,
  (state: any) => !!state.professional && state.personal
);

export const getPersonalForm = createSelector(
  getFromState,
  (state: any) => !!state.personal && state.professional
);

/********************/
export const getUserState = createSelector(
  getFromState,
  (state: any) => state.user
);

export const getUser = createSelector(
  getFromState,
  (state: any) => state.entity
);

export const getLoading = createSelector(
  getFromState,
  (state: any) => state.loading
);

export const getRole = createSelector(
  getFromState,
  (state: any) => state.entity.role
);

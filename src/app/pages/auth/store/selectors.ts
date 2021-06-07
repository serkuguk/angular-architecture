import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '@app/shared/types/store/app-state-interface'
import {UserStateInterface} from '@app/pages/auth/types/user-state-interface'

export const authFeatureSelector = createFeatureSelector<AppStateInterface, UserStateInterface>('auth')

export const getCurrentUser = createSelector(
  authFeatureSelector,
  (state) => state.entity
)

export const getLoading = createSelector(
  authFeatureSelector,
  (state) => state.loading
);

export const getIsAuthorized = createSelector(
  authFeatureSelector,
  (state) => !!state.uid
);

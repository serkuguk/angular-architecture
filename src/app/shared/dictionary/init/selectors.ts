import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '@app/shared/types/store/app-state-interface'
import {UserStateInterface} from "@app/pages/auth/types/user-state-interface";

export const initSelector = createFeatureSelector<AppStateInterface, UserStateInterface>('init')

export const getCurrentUser = createSelector(
  initSelector,
  (state: UserStateInterface) => state.entity
)

export const getLoading = createSelector(
  initSelector,
  (state: UserStateInterface) => state.loading
);

export const getIsAuthorized = createSelector(
  initSelector,
  (state: UserStateInterface) => !!state.uid
);

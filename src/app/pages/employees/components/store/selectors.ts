import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '@app/shared/types/store/app-state-interface'
import {EmployeesListInterface} from "@app/pages/employees/components/types/employees-list-interface";

export const getEmployeesStateSelector = createFeatureSelector<AppStateInterface, EmployeesListInterface>('employees')

export const getEmployeesState = createSelector(
  getEmployeesStateSelector,
  (state: EmployeesListInterface) => state
)

export const getEmployeesItemsSelector = createSelector(
  getEmployeesState,
  (state: EmployeesListInterface) => state.items
)

export const getLoadingEmployeesSelector = createSelector(
  getEmployeesState,
  (state: EmployeesListInterface) => state.loading
)



import {createAction, props} from '@ngrx/store'
import {ActionTypes} from "@app/pages/employees/components/store/actionTypes"
import {UserInterface} from "@app/shared/types/backend/types/user-interface"
import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";

export const readEmployeeActions = createAction(
  ActionTypes.READ_EMPLOYEE
)

export const readEmployeeSuccessActions = createAction(
  ActionTypes.READ_EMPLOYEE_SUCCESS,
  props<{items: UserEmployeeInterface[]}>()
)

export const readEmployeeFailureActions = createAction(
  ActionTypes.READ_EMPLOYEE_ERROR,
  props<{error: string}>()
)


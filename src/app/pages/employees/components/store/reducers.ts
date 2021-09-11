import {Action, createReducer, on} from '@ngrx/store'
import {EmployeesListInterface} from "@app/pages/employees/components/types/employees-list-interface"
import {
  readEmployeeActions, readEmployeeFailureActions,
  readEmployeeSuccessActions
} from "@app/pages/employees/components/store/actions/employees.actions";

const initialEmployeesState: EmployeesListInterface = {
  items: null,
  loading: null,
  error: null
}

const employeesReducer = createReducer(
  initialEmployeesState,
  on(readEmployeeActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(readEmployeeSuccessActions,
    (state, action) => ({
      ...state,
      items: action.items,
      loading: false
    })
  ),
  on(readEmployeeFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  )
)

export function reducers(state: any, action: Action) {
  return employeesReducer(state, action)
}

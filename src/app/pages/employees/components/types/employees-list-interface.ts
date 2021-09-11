import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";

export interface EmployeesListInterface {
  items: UserEmployeeInterface[]
  loading: boolean
  error: string
}

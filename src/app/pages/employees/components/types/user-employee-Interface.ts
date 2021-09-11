import {UserInterface as DBUser} from "@app/shared/types/backend/types/user-interface"
import {EmployeeInterface} from "@app/shared/types/backend/types/employee-interface"

export interface UserEmployeeInterface extends DBUser{
  role: EmployeeInterface
}

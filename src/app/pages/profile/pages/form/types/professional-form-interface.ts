import {RecruiterFormInterface} from '@app/pages/profile/pages/form/types/recruiter-form-interface';
import {EmployeeFormInterface} from '@app/pages/profile/pages/form/types/employee-form-interface';

export interface ProfessionalFormInterface {
  about: string
  roleId: string
  role: RecruiterFormInterface | EmployeeFormInterface
}

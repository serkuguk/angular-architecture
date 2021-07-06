import {ExperienceInterface} from '@app/shared/types/backend/types/experience-interface';

export interface EmployeeFormInterface {
  specialization: string
  skills: string[]
  qualification: string
  expectedSalary: number
  experiences: ExperienceInterface[]
}

import {SpecializationInterface} from '@app/shared/types/backend/types/specialization-interface'
import {QualificationInterface} from '@app/shared/types/backend/types/qualification-interface'
import {SkillInterface} from '@app/shared/types/backend/types/skill-interface'
import {ExperienceInterface} from '@app/shared/types/backend/types/experience-interface'

export interface EmployeeInterface {
  specialization: SpecializationInterface
  skills: SkillInterface[]
  qualification: QualificationInterface
  expectedSalary: number
  experiences: ExperienceInterface[]
}

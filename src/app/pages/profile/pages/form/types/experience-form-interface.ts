import {PeriodInterface} from '@app/shared/types/backend/types/period-interface';
import {PeriodExperienceInterface} from '@app/pages/profile/pages/form/types/period-experience-interface';

export interface ExperienceFormInterface {
  companyName: string
  period: PeriodExperienceInterface
}

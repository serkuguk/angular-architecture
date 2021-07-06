import {PersonalFormInterface} from '@app/pages/profile/pages/form/types/personal-form-interface';
import {ProfessionalFormInterface} from '@app/pages/profile/pages/form/types/professional-form-interface';

export interface ProfileFormInterface {
  personal: PersonalFormInterface
  professional: ProfessionalFormInterface
}

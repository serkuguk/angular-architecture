import {IconInterface} from '@app/shared/types/frontend/icon-interface';

export type Value = number | string | boolean

export interface ControlItemInterface {
  value: Value
  label: string
  icon: IconInterface | null
}

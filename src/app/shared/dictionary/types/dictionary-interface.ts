import {ItemInterface} from '@app/shared/types/frontend/types/item-interface'
import {ControlItemInterface} from '@app/shared/types/frontend/types/control-item-interface'

export interface DictionaryInterface {
  items: ItemInterface[]
  controlItems: ControlItemInterface[]
}

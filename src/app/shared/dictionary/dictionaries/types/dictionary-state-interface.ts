import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';

export interface DictionaryStateInterface {
  entities: DictionariesInterface
  loading: boolean
  error: string
}

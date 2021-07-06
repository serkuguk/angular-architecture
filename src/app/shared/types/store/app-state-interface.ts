import {DictionaryStateInterface} from '@app/shared/dictionary/dictionaries/types/dictionary-state-interface';
import {UserStateInterface} from '@app/pages/auth/types/user-state-interface';

export interface AppStateInterface {
    dictionary : DictionaryStateInterface,
    auth: UserStateInterface,
    profile: any
}

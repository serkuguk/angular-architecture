import {Action, createReducer, on} from '@ngrx/store';
import {DictionaryStateInterface} from '@app/shared/dictionary/dictionaries/types/dictionary-state-interface';
import {
  dictionariesActions,
  dictionariesFailureActions,
  dictionariesSuccessActions
} from '@app/shared/dictionary/dictionaries/actions/dictionaries.actions'

const initialState: DictionaryStateInterface = {
 entities: null,
 loading: false,
 error: null
}

const dictionaryReducer = createReducer(
  initialState,
  on(dictionariesActions,
    (state): DictionaryStateInterface => ({
              ...state,
              loading: true,
              error: null
           })
  ),
  on(dictionariesSuccessActions,
    (state, action): DictionaryStateInterface => ({
              ...state,
              loading: false,
              entities: action.dictionaries,
              error: null
           })
  ),
  on(dictionariesFailureActions,
    (state, action): DictionaryStateInterface => ({
              ...state,
              loading: false,
              entities: null,
              error: action.errors
          })
  )
)

export function reducers(state: DictionaryStateInterface, action: Action) {
  return dictionaryReducer(state, action)
}

import {Action, createReducer, on} from '@ngrx/store';
import {initActions,
  initAuthorizedActions,
  initFailureActions,
  initUnAuthorizedActions} from '@app/shared/dictionary/init/actions/init.actions'
import {UserStateInterface} from "@app/pages/auth/types/user-state-interface";


const initialUserState: UserStateInterface = {
  entity: null,
  uid: null,
  loading: null,
  error: null,
  isLoggedIn: null
}

const dictionaryReducer = createReducer(
  initialUserState,
  on(initActions,
    (state) => ({
      ...state,
      loading: true
    })
  ),
  on(initAuthorizedActions,
    (state, action) => ({
      ...state,
      entity: action.currentUser,
      uid: action.uid,
      loading: false,
      error: null
    })
  ),
  on(initUnAuthorizedActions,
    (state) => ({
      ...state,
      entity: null,
      loading: false,
      error: null
    })
  ),
  on(initFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  )
)

export function reducers(state: UserStateInterface, action: Action) {
  return dictionaryReducer(state, action)
}

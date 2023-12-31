import {UserStateInterface} from '@app/pages/auth/types/user-state-interface'
import {Action, createReducer, on} from '@ngrx/store'
import {loginActions,
        loginFailureActions,
        loginSuccessActions} from '@app/pages/auth/store/actions/login.actions'

import {registrationActions,
        registrationFailureActions,
        registrationSuccessActions} from '@app/pages/auth/store/actions/registration.actions'

import {logoutActions, logoutSuccessActions} from '@app/pages/auth/store/actions/logout.actions'

const initialUserState: UserStateInterface = {
  entity: null,
  uid: null,
  loading: null,
  error: null,
  isLoggedIn: null
}

const userReducer = createReducer(
  initialUserState,
  on(loginActions,
      (state) => ({
        ...state,
        loading: true
      })
    ),
  on(loginSuccessActions,
    (state, action) => ({
      ...state,
      loading: false,
      entity: action.currentUser,
      uid: action.currentUser.uid,
      error: null
    })
  ),
  on(loginFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  on(registrationActions,
  (state) => ({
    ...state,
    loading: true
  })
  ),
  on(registrationSuccessActions,
    (state, action) => ({
      ...state,
      loading: false,
      entity: action.currentUser,
      uid: action.currentUser.uid,
      error: null
    })
  ),
  on(registrationFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  on(logoutActions,
    () => ({
      ...initialUserState,
      loading: true
    })
  ),
  on(logoutSuccessActions,
    () => ({
      ...initialUserState
    })
  )
)

export function reducers(state: UserStateInterface, action: Action) {
  return userReducer(state, action)
}

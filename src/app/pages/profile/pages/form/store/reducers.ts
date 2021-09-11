import {Action, createReducer, on} from '@ngrx/store';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';
import {clearProfileActions, setProfileActions, updateProfileActions} from '@app/pages/profile/pages/form/store/actions/form.actions';
import {
  userCreateActions,
  userCreateErrorActions,
  userCreateSuccessActions, userUpdateActions, userUpdateErrorActions, userUpdateSuccessActions
} from '@app/pages/profile/pages/form/store/actions/user.actions';
import {state} from '@angular/animations';


const initialProfileState: ProfileFormInterface = {
  personal: null,
  professional: null
}

const userReducer = createReducer(
  initialProfileState,
  //user create
  on(userCreateActions,
    (state, action) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(userCreateSuccessActions,
    (state, action) => ({
      ...state,
      entity: action.user,
      loading: false,
      error: null
    })
  ),
  on(userCreateErrorActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  //user update
  on(userUpdateActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(userUpdateSuccessActions,
    (state, action) => ({
      ...state,
      entity: action.user,
      loading: false
    })
  ),
  on(userUpdateErrorActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  //profile
  on(setProfileActions,
      (state, action) => ({
        ...state,
        ...action.form
      })
  ),
  on(updateProfileActions,
    (state, action) => ({
      ...state,
      ...action.changes
    })
  ),
  on(clearProfileActions,
    () => ({
      ...initialProfileState
    })
  )
)

export function reducers(state: any, action: Action) {
  return userReducer(state, action)
}

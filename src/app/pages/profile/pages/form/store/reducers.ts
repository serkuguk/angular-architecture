import {Action, createReducer, on} from '@ngrx/store';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';
import {clearProfileActions, setProfileActions, updateProfileActions} from '@app/pages/profile/pages/form/store/actions/form.actions';


const initialProfileState: ProfileFormInterface = {
  personal: null,
  professional: null
}

const userReducer = createReducer(
  initialProfileState,
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

export function reducer(state: any, action: Action) {
  return userReducer(state, action)
}

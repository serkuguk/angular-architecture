import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '@app/pages/auth/store/actionTypes'


export const logoutActions = createAction(ActionTypes.SIGN_OUT)



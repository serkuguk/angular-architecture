import {UserInterface} from '@app/shared/types/backend/types/user-interface';

export interface UserStateInterface {
  entity: UserInterface,
  uid: string,
  loading: boolean,
  error: string
}

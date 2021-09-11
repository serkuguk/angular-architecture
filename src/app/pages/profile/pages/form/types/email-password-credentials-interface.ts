import {UserInterface} from '@app/shared/types/backend/types/user-interface';

export interface EmailPasswordCredentialsInterface {
  email: string
  password: string
}

export type UserCreateRequest = Omit<UserInterface, 'uid' | 'email' | 'created'>

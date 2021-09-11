export enum ActionTypes {
  SET_PROFILE = '[Profile] [Form] Set',
  UPDATE_PROFILE = '[Profile] [Form] Update',
  CLEAR_PROFILE = '[Profile] [Form] Clear',

  READ = '[Profile] [User] Read: Start',
  READ_SUCCESS = '[Profile] [User] Read: Success',
  READ_ERROR = '[Profile] [User] Read: Error',
  CLEAR = '[Profile] [User] Clear',

  CREATE = '[User] Create: Start',
  CREATE_SUCCESS = '[User] Create: Success',
  CREATE_ERROR = '[User] Create: Error',

  UPDATE = '[User] Update: Start',
  UPDATE_SUCCESS = '[User] Update: Success',
  UPDATE_ERROR = '[User] Update: Error'
}

import {createAction, props} from '@ngrx/store'
import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";
import {ActionTypes} from "@app/pages/jobs/store/actionTypes";
import {JobInterface} from "@app/shared/types/backend/types/job-interface";

//Read
export const readJobActions = createAction(
  ActionTypes.READ_JOB
)

export const readJobSuccessActions = createAction(
  ActionTypes.READ_JOB_SUCCESS,
  props<{items: JobInterface[]}>()
)

export const readJobFailureActions = createAction(
  ActionTypes.READ_JOB_FAILURE,
  props<{error: string}>()
)

//Create
export const createJobActions = createAction(
  ActionTypes.CREATE_JOB
)

export const createJobSuccessActions = createAction(
  ActionTypes.CREATE_JOB_SUCCESS,
  props<{items: JobInterface[]}>()
)

export const createJobFailureActions = createAction(
  ActionTypes.CREATE_JOB_FAILURE,
  props<{error: string}>()
)

//Update
export const updateJobActions = createAction(
  ActionTypes.UPDATE_JOB
)

export const updateJobSuccessActions = createAction(
  ActionTypes.UPDATE_JOB_SUCCESS,
  props<{items: JobInterface[]}>()
)

export const updateJobFailureActions = createAction(
  ActionTypes.UPDATE_JOB_FAILURE,
  props<{error: string}>()
)

//Delete
export const deleteJobActions = createAction(
  ActionTypes.DELETE_JOB
)

export const deleteJobSuccessActions = createAction(
  ActionTypes.DELETE_JOB_SUCCESS,
  props<{items: JobInterface[]}>()
)

export const deleteJobFailureActions = createAction(
  ActionTypes.DELETE_JOB_FAILURE,
  props<{error: string}>()
)

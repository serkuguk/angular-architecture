import {Action, createReducer, on} from '@ngrx/store'
import {createEntityAdapter} from '@ngrx/entity'
import {
  createJobActions,
  createJobFailureActions,
  createJobSuccessActions,
  deleteJobActions,
  deleteJobFailureActions,
  deleteJobSuccessActions,
  readJobActions,
  readJobFailureActions,
  readJobSuccessActions,
  updateJobActions,
  updateJobFailureActions,
  updateJobSuccessActions
} from "@app/pages/jobs/store/actions/jobs.actions";

export const listAdapter = createEntityAdapter()

const initialJobState: any = {
  loading: null,
  error: null
}

const jobReducer = createReducer(
  initialJobState,
  //read
  on(readJobActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(readJobSuccessActions,
    (state, action) => {
      return listAdapter.addMany(action.items, {...state, loading: false})
    }
  ),
  on(readJobFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  //create
  on(createJobActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(createJobSuccessActions,
    (state, action) => {
      //return listAdapter.addOne(action.jobs, state)
    }
  ),
  on(createJobFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),
  //update
  on(updateJobActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
    on(updateJobSuccessActions,
      (state, action) => {
        /*return listAdapter.updateOne({
            id: action.id,
            changes: action.changes
        }, state)*/
      }
    ),
    on(updateJobFailureActions,
      (state, action) => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
   //delete
  on(deleteJobActions,
    (state) => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(deleteJobSuccessActions,
    (state, action) => {
      //return listAdapter.removeOne(action.id, state)
    }
  ),
  on(deleteJobFailureActions,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  )
)

export function reducers(state: any, action: Action) {
  return jobReducer(state, action)
}

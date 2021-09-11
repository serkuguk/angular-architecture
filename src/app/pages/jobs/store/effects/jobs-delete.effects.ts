import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {of} from 'rxjs'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {extractDocumentChangeActionData} from "@app/shared"
import {readJobActions, readJobFailureActions, readJobSuccessActions} from "@app/pages/jobs/store/actions/jobs.actions";
import {JobInterface} from "@app/shared/types/backend/types/job-interface";

@Injectable()
export class JobsDeleteEffects {
  jobs_delete$ = createEffect(() => this.actions$.pipe(
    ofType(readJobActions),
    switchMap(() => {
        return this.afs.collection('jobs', ref => ref.orderBy('created')).snapshotChanges().pipe(
          take(1),
          map(changes => changes.map(x => extractDocumentChangeActionData(x))),
          map((items: JobInterface[]) => readJobSuccessActions({items})),
          catchError((errorResponse) => {
            return of(readJobFailureActions({error: errorResponse.error}));
          })
        )
    })))

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {}
}

import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {initActions, initUnAuthorizedActions, initFailureActions, initAuthorizedActions} from '@app/shared/dictionary/init/actions/init.actions'

import {of} from 'rxjs'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable()
export class InitEffects {

  init$ = createEffect(() => this.actions$.pipe(
    ofType(initActions),
    switchMap(() => this.afAuth.authState.pipe(take(1))),

    switchMap(authState => {
      if (authState) {
        return this.afs.doc(`users/${authState.uid}`).valueChanges().pipe(
          take(1),
          map(currentUser => {
             const uid = authState.uid
             return initAuthorizedActions({uid, currentUser} || null)
          }),
          catchError(err => of(initFailureActions(err.message)))
        );

      } else {
        return of(initUnAuthorizedActions());
      }
    })))



  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {}
}

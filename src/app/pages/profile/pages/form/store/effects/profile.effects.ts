import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {of} from 'rxjs'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {readErrorActions, readSuccessActions, userReadActions} from '@app/pages/profile/pages/form/store/actions/user.actions';

@Injectable()
export class ProfileEffects {

  profile$ = createEffect(() => this.actions$.pipe(
    ofType(userReadActions),
    switchMap((action: any) => {
      return this.afs.doc(`users/${action.id}`).valueChanges().pipe(
        take(1),
        tap((user) => console.log('success user = ', user)),
        map(user => readSuccessActions({user})),
        catchError(err => of(readErrorActions(err.message)))
      );
    })))

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {}
}

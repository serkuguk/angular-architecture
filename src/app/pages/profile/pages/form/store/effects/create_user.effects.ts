import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap, withLatestFrom} from 'rxjs/operators';
import  * as firestore  from 'firebase/app';
import 'firebase/firestore'

import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {
  readErrorActions,
  readSuccessActions,
  userCreateActions, userCreateErrorActions, userCreateSuccessActions,
  userReadActions
} from '@app/pages/profile/pages/form/store/actions/user.actions';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {from, of} from 'rxjs';
import {Router} from "@angular/router";


@Injectable()
export class CreateUserEffects {

  create_user$ = createEffect(() => this.actions$.pipe(
    ofType(userCreateActions),
    map((action) => action.user),
    withLatestFrom(this.afAuth.authState.pipe(take(1))),
    map(([user, state]) => ({
        ...user,
       uid: state.uid,
       email: state.email,
       crated: firestore.default.firestore.FieldValue.serverTimestamp()
    })),
    switchMap((user: any) =>
      from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
        tap(() => this.router.navigate(['/profile', user.uid])),
        map(() => userCreateSuccessActions({user})),
        catchError(err => of(userCreateErrorActions(err.message)))
      )
    )
  ));

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {}
}

import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap, withLatestFrom} from 'rxjs/operators';
import  * as firestore  from 'firebase/app';
import 'firebase/firestore'

import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {
  userCreateErrorActions,
  userUpdateActions, userUpdateErrorActions,
  userUpdateSuccessActions
} from '@app/pages/profile/pages/form/store/actions/user.actions';
import {from, of} from 'rxjs';
import {Router} from "@angular/router";


@Injectable()
export class UpdateUserEffects {

  update_user$ = createEffect(() => this.actions$.pipe(
    ofType(userUpdateActions),
    map((action) => action.user),
    switchMap(user =>
              from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
                tap(() => this.router.navigate(['/profile', user.uid])),
                map(() => userUpdateSuccessActions({user})),
                catchError(err => of(userUpdateErrorActions(err.message)))
              )
    )
  ));

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {}
}

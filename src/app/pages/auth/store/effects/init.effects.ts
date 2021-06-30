import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {initActions, initUnAuthorizedActions, initFailureActions, initAuthorizedActions} from '@app/pages/auth/store/actions/init.actions'

import {UserService} from '@app/pages/auth/services/user.service'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import {UserInterface} from '@app/shared/types/backend/types/user-interface'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable()
export class InitEffects {

  init$ = createEffect(() => this.actions$.pipe(
    ofType(initActions),
    switchMap(() => this.afAuth.authState.pipe(first())),
    switchMap(authState => {
      if (authState) {

        return this.afs.doc(`users/${authState.uid}`).valueChanges().pipe(
          take(1),
          map(currentUser => initAuthorizedActions({currentUser} || null)),
          catchError(err => of(initFailureActions(err.message)))
        );

      } else {
        return of(initUnAuthorizedActions);
      }
    })))



  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private userService: UserService) {}
}

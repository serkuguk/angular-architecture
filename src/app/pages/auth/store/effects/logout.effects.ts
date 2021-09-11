import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import {logoutActions, logoutFailureActions, logoutSuccessActions} from '@app/pages/auth/store/actions/logout.actions'
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {from, of} from "rxjs";

@Injectable()
export class LogoutEffects {

  logout$ = createEffect(() => this.actions$.pipe(
    tap(() => console.log('INIT_1')),
                                      ofType(logoutActions),
    tap(() => console.log('INIT_2')),
                                      switchMap(() =>
                                          from(this.afAuth.signOut()).pipe(
                                            map(() => logoutSuccessActions())
                                          )
                                      ),
                                      catchError((errorResponse) => {
                                        return of(logoutFailureActions({error: errorResponse.error}));
                                      })
                                    )
  )

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutSuccessActions),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch: false}
  )

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {}
}

import {Injectable} from '@angular/core'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import {
  registrationActions,
  registrationFailureActions,
  registrationSuccessActions
} from '@app/pages/auth/store/actions/registration.actions'

import {NotificationService} from '@app/shared/services'
import {UserService} from '@app/pages/auth/services/user.service';
import {of} from 'rxjs'
import {environment} from '@src/environments/environment.dev'
import {HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class RegistrationEffects {

  register$ = createEffect(() => this.actions$.pipe(
                                  ofType(registrationActions),
                                  switchMap(({request}) => {
                                       return this.userService.create(request).pipe(
                                          map((currentUser: any) => {
                                            return registrationSuccessActions({currentUser})
                                          }),
                                          catchError((errorResponse: HttpErrorResponse) => {
                                            return of(registrationFailureActions({error: errorResponse.error.errors}))
                                          })
                                        )
                                  })
  ))

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
          ofType(registrationSuccessActions),
          tap(() => {
            this.router.navigate(['/auth/email-confirm']);
          })),
    {dispatch: false}
  )

  constructor(private actions$: Actions,
              private userService: UserService,
              private router: Router,
              private notification: NotificationService) {}
}

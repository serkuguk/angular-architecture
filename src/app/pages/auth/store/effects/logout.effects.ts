import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import {logoutActions} from '@app/pages/auth/store/actions/logout.actions'
import {Router} from '@angular/router';
import {UserService} from '@app/pages/auth/services/user.service';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class LogoutEffects {

  logout$ = createEffect(() => this.actions$.pipe(
                                      ofType(logoutActions),
                                      switchMap(() => this.userService.logout()),
                                      tap(() => this.router.navigateByUrl("/"))
      ),
    {dispatch: false}

  )

  constructor(private actions$: Actions,
              private userService: UserService,
              private router: Router) {}
}

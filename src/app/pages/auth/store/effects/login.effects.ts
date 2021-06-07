import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loginActions} from '@app/pages/auth/store/actions/login.actions';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
                                  ofType(loginActions),
                                 // switchMap(() => {})
  ))

  constructor(private actions$: Actions) {}
}

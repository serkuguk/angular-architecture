import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {of} from 'rxjs'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {UserInterface} from "@app/shared/types/backend/types/user-interface";
import {extractDocumentChangeActionData} from "@app/shared"
import {
  readEmployeeActions,
  readEmployeeFailureActions,
  readEmployeeSuccessActions
} from "@app/pages/employees/components/store/actions/employees.actions";
import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";

@Injectable()
export class EmployeesEffects {

  read_employees$ = createEffect(() => this.actions$.pipe(
    ofType(readEmployeeActions),
    switchMap(() => {
        return this.afs.collection<UserInterface>('users', ref => ref.where('roleId', '==', 'employee')).snapshotChanges().pipe(
          take(1),
          map(changes => changes.map(x => extractDocumentChangeActionData(x, false))),
          map((items: UserEmployeeInterface[]) => readEmployeeSuccessActions({items})),
          catchError((errorResponse) => {
            return of(readEmployeeFailureActions({error: errorResponse.error}));
          })
        )
    })))

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {}
}

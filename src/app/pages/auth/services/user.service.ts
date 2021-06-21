import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFirestore} from '@angular/fire/firestore'
import {from, Observable, of} from 'rxjs';
import {catchError, first, map, switchMap, take, tap} from 'rxjs/operators';

import {environment} from '@src/environments/environment.dev'
import {UserInterface} from '@app/shared/types/backend/types/user-interface'
import {loginFailureActions, loginSuccessActions} from '@app/pages/auth/store/actions/login.actions';

@Injectable()
export class UserService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  init(): Observable<any> {
    return this.afAuth.authState.pipe(take(1))
  }

  create(credentials: any): Observable<any> {
    let emailLower = credentials.email.toLowerCase()
    return from(this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      tap(() => {
        from(this.afAuth.currentUser).pipe(
          map(user => user.sendEmailVerification(environment.firebase.actionCodeSettings))
        )
      })
    )
  }

  /*login(credentials): Observable<any> {

  }*/

  logout(): Observable<any> {
    return from(this.afAuth.signOut())
  }

  getUserById(user): Observable<any> {
    return this.afs.doc<any>(`users/${user.uid}`)
                                  .valueChanges()
                                  .pipe(take(1))
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first())
  }
}

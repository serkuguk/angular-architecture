import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '@src/environments/environment.dev';

@Injectable()
export class UserService {

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) { }

  create(credentials: any): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      tap(() => {
        from(this.afAuth.currentUser).pipe(
          map(user => user.sendEmailVerification(environment.firebase.actionCodeSettings))
        )
      })
    )
  }
}

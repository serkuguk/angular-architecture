import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {initActions} from '@app/shared/dictionary/init/actions/init.actions'
import {getCurrentUser, getIsAuthorized} from '@app/shared/dictionary/init/selectors';
import {logoutActions} from '@app/pages/auth/store/actions/logout.actions'
import {dictionariesActions} from '@app/shared/dictionary/dictionaries/actions/dictionaries.actions'
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {filter, take, tap} from 'rxjs/operators';
import {getUserState} from "@app/pages/profile/pages/form/store/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'new-practic'
  isAuthorized$: Observable<any>//Observable<boolean>
  user$: Observable<UserInterface>

  constructor(private store: Store) {}

  ngOnInit() {
    this.isAuthorized$ = this.store.pipe(select(getIsAuthorized))
    this.user$ = this.store.pipe(select(getCurrentUser))

    this.initializationData()

    /*this.store.dispatch(select(getUserState)).pipe(
      filter(state => !!state.uid),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(dictionariesActions())
    })*/
  }

  initializationData(): void {
    this.store.dispatch(initActions())
    //this.store.dispatch(dictionariesActions())
  }

  onSignOut() {
    this.store.dispatch(logoutActions())
  }
}

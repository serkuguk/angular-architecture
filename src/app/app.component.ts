import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {initActions} from '@app/pages/auth/store/actions/init.actions'
import {getCurrentUser, getIsAuthorized} from '@app/pages/auth/store/selectors';
import {logoutActions} from '@app/pages/auth/store/actions/logout.actions'
import {dictionariesActions} from '@app/shared/dictionary/dictionaries/actions/dictionaries.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'new-practic'
  isAuthorized$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit() {
    //this.isAuthorized$ = this.store.pipe(select(getIsAuthorized))
    //this.initializationData()
  }

  initializationData(): void {
    this.store.dispatch(initActions())
    this.store.dispatch(dictionariesActions())
  }

  onSignOut() {
    this.store.dispatch(logoutActions())
  }
}

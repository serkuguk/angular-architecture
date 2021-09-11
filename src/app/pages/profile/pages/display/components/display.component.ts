import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Params} from '@angular/router';
import {getCurrentUser} from '@app/pages/auth/store/selectors';
import {clearProfileActions} from '@app/pages/profile/pages/form/store/actions/form.actions';
import {userReadActions} from '@app/pages/profile/pages/form/store/actions/user.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit, OnDestroy {

  user$: Observable<UserInterface>
  isOwnProfile$: Observable<boolean>

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(getCurrentUser))
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.store.dispatch(userReadActions(id))

      this.isOwnProfile$ = this.store.pipe(
        select(getCurrentUser),
        map(user => user && user.uid === id)
      )
    })
  }

  ngOnDestroy() {
    this.store.dispatch(clearProfileActions())
  }
}

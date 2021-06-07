import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {dictionariesActions} from '@app/shared/dictionary/dictionaries/actions/dictionaries.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'new-practic';

  constructor(private store: Store) {}

  ngOnInit() {
      this.store.dispatch(dictionariesActions())
  }
}

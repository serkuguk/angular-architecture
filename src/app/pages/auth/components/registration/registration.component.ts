import { Component, OnInit } from '@angular/core'
import {Store} from '@ngrx/store'
import {registrationActions} from '@app/pages/auth/store/actions/registration.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    const request = {
      email: 'sergio.kuguk@gmail.com',
      password: 'temp1234'
    }
    //this.store.dispatch(registrationActions({request}))
  }

}

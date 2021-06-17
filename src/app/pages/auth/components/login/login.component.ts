import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {regex, regexErrors} from '@app/shared/utils/regex'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {getLoading} from '@app/pages/auth/store/selectors'
import {markFormGroupTouched} from '@app/shared';
import {EmailPasswordCredentialsInterface} from '@app/pages/auth/types/email-password-credentials-interface';
import {loginActions} from '@app/pages/auth/store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean>
  form: FormGroup
  regexError = regexErrors

  constructor(private fb: FormBuilder,
              private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoading))
    this.initializationForm()
  }

  initializationForm(): void {
    this.form = this.fb.group({
      email: [null, {
                  updateOn: 'blur',
                  validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.email)
                  ],
      }],
      password: [null, {
                    updateOn: 'blur',
                    validators: [
                      Validators.required
                    ]
      }]
    })
  }

  onSubmit(): void {

    if(!this.form.valid) {
      markFormGroupTouched(this.form)
    }

    const credentials: EmailPasswordCredentialsInterface = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.store.dispatch(loginActions({credentials}))
  }

}

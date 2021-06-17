import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {markFormGroupTouched, regex, regexErrors} from '@app/shared/utils';
import {Observable} from 'rxjs';
import {getLoading} from '@app/pages/auth/store/selectors';
import {EmailPasswordCredentialsInterface} from '@app/pages/auth/types/email-password-credentials-interface';
import {registrationActions} from '@app/pages/auth/store/actions/registration.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  form: FormGroup
  regexErrors = regexErrors
  loading$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoading))

    this.form = this.fb.group({
        email: [null, {
          updateOn: 'blur',
          validators: [Validators.required,
                       Validators.maxLength(128),
                       Validators.pattern(regex.email)]
        }],
        password: [null, {
          updateOn: 'blur',
          validators: [Validators.required,
                       Validators.minLength(6),
                       Validators.maxLength(30),
                       Validators.pattern(regex.password)]
        }],
        passwordRepeat: [null, {
          updateOn: 'blur',
          validators: [Validators.required,
                       Validators.minLength(6),
                       Validators.maxLength(30),
                       Validators.pattern(regex.password)]
        }]
    }, {validators: RegistrationComponent.repeatPasswordValidator} )

  }

   private static repeatPasswordValidator(group: FormGroup): {[key: string]: boolean} | null {
    const password = group.get("password")
    const passwordRepeat = group.get("passwordRepeat")

    return passwordRepeat.value && password.value !== passwordRepeat.value ? {repeat: true} : null
  }

  onSubmit() {
    if (!this.form.valid) {
      markFormGroupTouched(this.form)
    }

    const request: EmailPasswordCredentialsInterface = {
       email: this.form.value.email,
       password: this.form.value.password
    }

    this.store.dispatch(registrationActions({request}))
  }
}

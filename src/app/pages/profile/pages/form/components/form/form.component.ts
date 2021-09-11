import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject, zip} from 'rxjs';
import {DictionariesInterface} from '@app/shared/dictionary/types/dictionaries-interface';
import {select, Store} from '@ngrx/store';
import {getDictionariesSelector, getIsReadySelector} from '@app/shared/dictionary/dictionaries/selectors';
import {PersonalFormInterface} from '@app/pages/profile/pages/form/types/personal-form-interface';
import {ProfessionalFormInterface} from '@app/pages/profile/pages/form/types/professional-form-interface';
import {getFromState, getPersonalForm, getProfessionalForm} from '@app/pages/profile/pages/form/store/selectors';
import {ActivatedRoute, Router} from '@angular/router';
import {MapperService} from '@app/pages/profile/pages/form/services/mapper.service';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';
import {setProfileActions, updateProfileActions} from "@app/pages/profile/pages/form/store/actions/form.actions";
import {userCreateActions, userUpdateActions} from "@app/pages/profile/pages/form/store/actions/user.actions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {

  private destroy = new Subject<any>()
  dictionaries$: Observable<DictionariesInterface>
  dictionariesIsReady$: Observable<boolean>

  personal$: Observable<PersonalFormInterface>
  professional$: Observable<ProfessionalFormInterface>

  loading$: Observable<boolean>

  private profile$: Observable<ProfileFormInterface>
  private user: UserInterface
  private isEditing: boolean

  constructor(public stepper: StepperService,
              private store: Store,
              private mapper: MapperService,
              private router: Router,
              private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user
    this.isEditing = !!this.user

    this.profile$ = this.store.pipe(select(getFromState))
    this.personal$ = this.store.pipe(select(getPersonalForm))
    this.professional$ = this.store.pipe(select(getProfessionalForm))

    this.dictionaries$ = this.store.pipe(select(getDictionariesSelector))
    this.dictionariesIsReady$ = this.store.pipe(select(getIsReadySelector))

    //this.loading$ = this.store.pipe(select(getLoading))
    if (this.user) {
      const form = this.mapper.userToForm(this.user)
      this.store.dispatch(setProfileActions({form}))
    }

    this.stepper.init([
      {key: 'professional', label: 'Professional'},
      {key: 'personal', label: 'Personal'}
    ])

    this.stepper.complete$.pipe(
      switchMap(() => zip(this.profile$, this.dictionaries$)),
      takeUntil(this.destroy)
    ).subscribe(([profile, dictionaries]) => {
        this.onComplete(profile, this.user, dictionaries)
    })

    this.stepper.cancel$.pipe(
      takeUntil(this.destroy)
    ).subscribe(() => this.router.navigate(['/profile', this.user.uid]))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
    //this.store.dispatch(clear())
  }

  get title(): string {
    return this.isEditing ? 'Edit Profile' : 'New Profile'
  }

  onChangedPersonal(data: PersonalFormInterface): void {
    this.store.dispatch(updateProfileActions({changes: data}))
  }

  onChangedProfessional(data: ProfessionalFormInterface): void {
    this.store.dispatch(updateProfileActions({changes: data}))
  }

  private onComplete(profile: ProfileFormInterface, user: UserInterface, dictionaries: DictionariesInterface) {
      if (this.isEditing) {

        const request = this.mapper.formToUserUpdate(profile, user, dictionaries)
        this.store.dispatch(userUpdateActions(request))

      } else {
        const request = this.mapper.formToUserCreate(profile, dictionaries)
        this.store.dispatch(userCreateActions(request))
      }
  }
}

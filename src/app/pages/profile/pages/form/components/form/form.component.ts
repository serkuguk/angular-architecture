import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';
import {select, Store} from '@ngrx/store';
import {getDictionariesSelector, getIsReadySelector} from '@app/shared/dictionary/dictionaries/selectors';
import {PersonalFormInterface} from '@app/pages/profile/pages/form/types/personal-form-interface';
import {ProfessionalFormInterface} from '@app/pages/profile/pages/form/types/professional-form-interface';
import {getPersonalForm, getProfessionalForm} from '@app/pages/profile/pages/form/store/selectors';

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

  constructor(public stepper: StepperService, private store: Store) { }

  ngOnInit(): void {
    this.dictionaries$ = this.store.pipe(select(getDictionariesSelector))
    this.dictionariesIsReady$ = this.store.pipe(select(getIsReadySelector))

   /* this.personal$ = this.store.pipe(select(getPersonalForm))
    this.professional$ = this.store.pipe(select(getProfessionalForm))*/

    this.stepper.init([
      {key: 'professional', label: 'Professional'},
      {key: 'personal', label: 'Personal'}
    ])

    this.stepper.complete$.pipe(
      takeUntil(this.destroy)
    ).subscribe(() => console.log('completed'))

    this.stepper.complete$.pipe(
      takeUntil(this.destroy)
    ).subscribe(() => console.log('canceled'))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }

  onChangedPersonal(data: PersonalFormInterface): void {
    console.log('personal changed = ', data)
  }

  onChangedProfessional(data: ProfessionalFormInterface): void {
    console.log('professional changed = ', data)
  }
}

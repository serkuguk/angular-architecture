import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';
import {select, Store} from '@ngrx/store';
import {getDictionariesSelector, getIsReadySelector} from '@app/shared/dictionary/dictionaries/selectors';
import {PersonalFormInterface} from '@app/pages/profile/pages/form/types/personal-form-interface';

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

  constructor(public stepper: StepperService, private store: Store) { }

  ngOnInit(): void {
    this.dictionaries$ = this.store.pipe(select(getDictionariesSelector))
    this.dictionariesIsReady$ = this.store.pipe(select(getIsReadySelector))

    this.stepper.init([
      {key: 'personal', label: 'Personal'},
      {key: 'professional', label: 'Professional'}
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

  }
}

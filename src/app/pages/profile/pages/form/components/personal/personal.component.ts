import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, EventEmitter, Output, ChangeDetectorRef} from '@angular/core';
import {Subject} from 'rxjs';
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service';
import {takeUntil} from 'rxjs/operators';
import {PersonalFormInterface} from '@app/pages/profile/pages/form/types/personal-form-interface';
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {markFormGroupTouched, regex} from '@app/shared';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalComponent implements OnInit, OnDestroy {

  @Input() value: PersonalFormInterface
  @Input() dictionaries: DictionariesInterface

  @Output() changed = new EventEmitter<PersonalFormInterface>()

  private destroy = new Subject<any>()
  form: FormGroup

  constructor(private stepper: StepperService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        photoURL: [null],
        name: [null, {
          updateOn: 'blur', validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(regex.latinAndSpaces)
          ]
        }],
        country: [null, {
          updateOn: 'change', validators: [
            Validators.required
          ]
        }],
    })

    if (this.value) {
      this.form.patchValue(this.value)
    }

    this.stepper.check$.pipe(
      takeUntil(this.destroy)
    ).subscribe((type) => {

      if (!this.form.valid) {
        markFormGroupTouched(this.form)
        this.form.updateValueAndValidity()
        this.cdr.detectChanges()
      } else {
        this.changed.emit(this.form.value)
      }

      this.stepper[type].next(this.form.valid)
    })
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }

  onPhotoChanged(url: string): void {
    if (url) {
      this.form.controls.photoURL.setValue(url);
    }
  }
}

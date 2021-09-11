import {ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef} from '@angular/core'
import {Observable, Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service'
import {DictionariesInterface} from '@app/shared/dictionary/types/dictionaries-interface'
import {ProfessionalFormInterface} from '@app/pages/profile/pages/form/types/professional-form-interface'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {markFormGroupTouched, regexErrors} from '@app/shared'

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit {

  @Input() value: ProfessionalFormInterface
  @Input() dictionaries: DictionariesInterface

  @Output() changed = new EventEmitter<ProfessionalFormInterface>()

  private destroy = new Subject<any>()

  form: FormGroup
  regexErrors = regexErrors

  constructor(private stepper: StepperService,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form =this.fb.group({
      roleId: [null, {
        updateOn: 'change',
        validators: [Validators.required]
      }],
      about: [null]
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
    })
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}

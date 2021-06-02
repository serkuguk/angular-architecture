import {Component, forwardRef, Input, OnInit, EventEmitter, Output} from '@angular/core'
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder, FormGroup} from '@angular/forms'

import {DateRangeValueInterface} from '@app/shared/types/frontend/types/date-range-value-interface';
import {DateRangePlaceholderInterface} from '@app/shared/types/frontend/types/date-range-placeholder-interface';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: DateRangePlaceholderInterface
  @Output() changed = new EventEmitter<DateRangeValueInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [null],
      to: [null]
    })
  }

  get max(): Date {
    const from = this.form.controls.from.value
    return from ? new Date(from) : null
  }

  get min(): Date {
    const to = this.form.controls.to.value
    return to ? new Date(to) : null
  }

  propagateChange: any = () => {}
  propagateTouched: any = () => {}

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable()
    }else {
      this.form.enable()
    }
  }

  writeValue(value: DateRangeValueInterface): void {
    this.form.patchValue(value || {})
  }

  onChanged(): void {
    const value = {...this.form.value}
    this.propagateChange(value)
    this.changed.emit(value)
  }

  onClosed(): void {
    this.propagateTouched()
  }
}

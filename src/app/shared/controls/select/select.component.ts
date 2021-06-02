import {Component, forwardRef, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

import {ControlItemInterface, Value} from '@app/shared/types/frontend/types/control-item-interface'
import {MatSelectChange} from '@angular/material/select'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() items: ControlItemInterface[]
  @Input() placeholder: string
  @Output() changed = new EventEmitter<Value>()

  value: Value;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { }
  private propagateTouched: any = () => { }

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  writeValue(value: Value): void {
    this.value = value
  }

  onBlur(): void {
    this.propagateTouched()
  }

  onChanged(event: MatSelectChange): void {
    const value = event.value ? event.value : null
    this.propagateChange(value)
    this.changed.emit(value)
  }
}

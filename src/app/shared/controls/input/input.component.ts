import {Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string
  @Output() changed = new EventEmitter<string>()

  value: string
  isDisabled: boolean

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {}
  private propagateTouched: any = () => {}

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  writeValue(value: string): void {
    this.value = value
  }

  onKeyup(value: string): void {
    this.value = value
    this.propagateChange(value)
    this.changed.emit(value)
  }

  onBlur(): void {
    this.propagateTouched()
  }
}
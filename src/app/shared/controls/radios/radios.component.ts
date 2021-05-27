import {Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {ControlItemInterface, Value} from '@app/shared/types/frontend/control-item-interface'

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  @Input() items: ControlItemInterface[]
  @Output() changed = new EventEmitter<Value>()

  value: Value
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

  writeValue(value: Value): void {
    this.value = value
  }

  onChanged(value: Value): void {
    this.value = value
    this.propagateChange(value)
    this.changed.emit(value)
  }

  isChecked(value: Value): boolean {
    return this.value === value
  }

}

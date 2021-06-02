import {Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {ControlItemInterface, Value} from '@app/shared/types/frontend/types/control-item-interface';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {

  @Input() items: ControlItemInterface[]
  @Output() changed = new EventEmitter<Value[]>()

  value: Value[]
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

  writeValue(value: Value[]): void {
    this.value = value
  }

  onChanged(value: Value, checked: boolean): void {
    const selected = this.getSelected(value, checked)
    this.propagateChange(selected)
    this.changed.emit(selected)
  }

  getSelected(value: Value, checked: boolean): Value[] {
    const selected: Value[] = this.value ? [...this.value] : []
    if (checked) {
      if (!selected.includes(value)) {
        selected.push(value)
      }
    }else {
      const index = selected.indexOf(value)
      selected.splice(index, 1)
    }
    return selected
  }

  isChecked(value: Value): boolean {
    return this.value && this.value.includes(value)
  }

}

import {Component, forwardRef, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from '@angular/forms'
import { Subject, Observable } from 'rxjs'
import { takeUntil, distinctUntilChanged, startWith, map, filter } from 'rxjs/operators'
import {ControlItemInterface, Value} from '@app/shared/types/frontend/control-item-interface'


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() items: ControlItemInterface[]
  @Input() placeholder: string

  @Output() changed = new EventEmitter<Value>()

  formControl = new FormControl();
  options$: Observable<ControlItemInterface[]>
  private destroy = new Subject<any>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.formControl.valueChanges.subscribe(t => console.log(typeof t === 'object')))
    this.options$ = this.formControl.valueChanges.pipe(
        startWith(''),
        filter(value => typeof value === 'string' || typeof value === 'object'),
        map(value => typeof value === 'string' ? value : value.label),
        map(label => label ? this.filter(label) : this.items.slice())
    )

    this.formControl.valueChanges.pipe(
      takeUntil(this.destroy),
      distinctUntilChanged()
    ).subscribe(item => {
      const value = typeof item === 'object' ? item.value : null
      this.propagateChange(value)
      this.changed.emit(value)
    })
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }

  private filter(value: string): ControlItemInterface[] {
    const filterValue = value.toLowerCase()
    return this.items.filter(item => item.label.toLowerCase().includes(filterValue))
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
    if (isDisabled) {
      this.formControl.disable()
    }else {
      this.formControl.enable()
    }
  }

  writeValue(value: Value): void {
    const selectedOption = this.items.find(item => item.value === value)
    this.formControl.setValue(selectedOption)
  }

  displayFn(item?: ControlItemInterface): string | undefined {
    return item ? item.label : undefined
  }

  onBlur(): void {
    this.propagateTouched()
  }
}
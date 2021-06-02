import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import {markFormGroupTouched, regex, regexErrors} from '@app/shared/utils'
import {ControlItemInterface} from '@app/shared/types/frontend/types/control-item-interface'
import {NotificationService} from '@app/shared/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form: FormGroup
  isInline: boolean
  toggleSpinner: boolean
  regexErrors = regexErrors
  items: ControlItemInterface[]

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.isInline = true
    this.items = [
      {label: 'First', value: 1, icon: null},
      {label: 'Second', value: 2, icon: null},
      {label: 'Third', value: 3, icon: null},
      {label: 'Fourth', value: 4, icon: null},
      {label: 'Fifth', value: 5, icon: null},
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.numbers)
        ]
      }],
      password: [null, {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(regex.password)
      ]
    }],
    autocomplete: [null, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
        radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
        date: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    })
  }

  onPatchValue() {
    this.form.patchValue({
       input: 123,
       password: 'temp123',
       autocomplete: 1,
       //select: 1,
       checkboxes: [3],
       radios: 4,
       date: new Date().getTime(),
       dateRange: {
       from: new Date(2021,5, 22).getTime(),
         to: new Date(2021, 6, 30).getTime()
       }
      })
  }

  onToggleInline() {
    this.isInline = !this.isInline
  }

  onToggleDisable() {
    if(this.form.enabled) {
      this.form.disable()
    }else {
      this.form.enable()
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      markFormGroupTouched(this.form)
    }
  }

  onToggleSpinner(): void {
    this.toggleSpinner = !this.toggleSpinner
  }


  onError(): void {
    this.notification.error("Oops! Something is wrong")
  }


  onSuccess(): void {
    this.notification.success("Service is fine!")
  }
}

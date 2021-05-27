import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import {regex, regexErrors} from '@app/shared/utils'
import {ControlItemInterface} from '@app/shared/types/frontend/control-item-interface'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form: FormGroup
  isInline: boolean
  regexErrors = regexErrors
  items: ControlItemInterface[]

  constructor(private fb: FormBuilder) {
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
      select: [null, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    }]
    })
  }

  onPatchValue() {
    this.form.patchValue({
      input: 123
      }
    )
  }

  onToggleInline() {
    this.isInline = !this.isInline
  }

  onSubmit() {

  }
}

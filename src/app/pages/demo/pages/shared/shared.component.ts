import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

//import {regex} from '@app/shared/utils'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form: FormGroup
  isInline: boolean

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }],
    })
  }

  onPatchValue() {
    this.form.patchValue({input: 'test'})
  }

  onToggleInline() {
    this.isInline = !this.isInline
  }

  onSubmit() {

  }
}

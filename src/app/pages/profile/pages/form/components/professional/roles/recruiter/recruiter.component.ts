import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';
import {RecruiterFormInterface} from '@app/pages/profile/pages/form/types/recruiter-form-interface';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit, OnDestroy {

  @Input() parent: FormGroup
  @Input() name: string

  @Input() value: RecruiterFormInterface
  @Input() dictionaries: DictionariesInterface

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      companyName: [null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }],
      employeesCount: [null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }]
    })

    if (this.value) {
      this.form.patchValue(this.value)
    }

    this.parent.addControl(this.name, this.form)
  }

  ngOnDestroy(): void {
    this.parent.removeControl(this.name)
  }
}

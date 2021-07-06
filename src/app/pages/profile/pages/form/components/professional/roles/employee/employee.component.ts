import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DictionariesInterface} from '@app/shared/dictionary/dictionaries/types/dictionaries-interface';
import {EmployeeFormInterface} from '@app/pages/profile/pages/form/types/employee-form-interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  @Input() parent: FormGroup
  @Input() name: string
  @Input() value: EmployeeFormInterface
  @Input() dictionaries: DictionariesInterface

  form: FormGroup
  //controls: ControlEntities

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      expectedSalary: [null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }],
      specialization: [null, {
        updateOn: 'change',
        validators: [Validators.required]
      }],
      qualification: [null, {
        updateOn: 'change',
        validators: [Validators.required]
      }],
      skills: [null, {
        updateOn: 'change',
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

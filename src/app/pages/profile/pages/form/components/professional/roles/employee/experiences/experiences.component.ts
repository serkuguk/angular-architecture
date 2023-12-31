import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExperienceInterface} from '@app/shared/types/backend/types/experience-interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  @Input() public parent: FormGroup
  @Input() public name: string

  @Input() public values: ExperienceInterface[]

  form: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.values = this.values ? this.values : []
    this.init()
  }

  ngOnDestroy(): void {
    this.parent.removeControl(this.name)
  }

  private init(): void {
    this.form = this.fb.array(this.getFormGroupArray(this.values))

    this.parent.addControl(this.name, this.form)
  }

  private getFormGroupArray(values: ExperienceInterface[]): FormGroup[] {
    if (!this.values.length) {
      return [this.getFormGroup()]
    } else {
      return values.map(value => this.getFormGroup(value))
    }
  }

  private getFormGroup(value?: ExperienceInterface): FormGroup {
    const group = this.fb.group({
                    companyName: [null, {
                      updateOn: 'blur',
                      validators: [Validators.required]
                    }],
                    period: [null, {
                      updateOn: 'change',
                      validators: [Validators.required]
                    }]
                  })
    if (value) {
      group.patchValue(value)
    }

    return group
  }

  addExperience(): void {
    this.form.push(this.getFormGroup())
  }

  deleteExperience(i: number): void {
    this.form.removeAt(i)
  }
}

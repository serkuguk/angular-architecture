import { Injectable } from '@angular/core'
import {StepInterface} from '@app/pages/profile/pages/form/types/step-interface'
import {ActiveStepInterface} from '@app/pages/profile/pages/form/types/active-step-interface'
import {Observable, Subject} from 'rxjs'
import {filter} from 'rxjs/operators';

@Injectable()
export class StepperService {

  steps: StepInterface[]
  activeStep: ActiveStepInterface

  next = new Subject<boolean>()
  next$: Observable<boolean>

  prev = new Subject<boolean>()
  prev$ = this.prev.asObservable()

  complete = new Subject<boolean>()
  complete$: Observable<boolean>

  cancel = new Subject<boolean>()
  cancel$ = this.cancel.asObservable()

  check = new Subject<'next' | 'complete'>()
  check$ = this.check.asObservable()

  constructor() {
    this.next$ = this.next.asObservable().pipe(
      filter(isOk => isOk)
    )

    this.complete$ = this.complete.asObservable().pipe(
      filter(isOk => isOk)
    )
  }

  init(steps: StepInterface[]): void {
    this.steps = steps
    this.activeStep = { ...steps[0], index: 0 }
  }

  onNext(): void {
    const index = this.activeStep.index + 1
    this.activeStep = {...this.steps[index], index}
  }

  onPrev(): void {
    const index = this.activeStep.index - 1
    this.activeStep = {...this.steps[index], index}
  }
}

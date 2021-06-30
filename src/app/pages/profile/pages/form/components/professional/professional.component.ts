import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {StepperService} from '@app/pages/profile/pages/form/services/stepper.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  private destroy = new Subject<any>()

  constructor(private stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.check$.pipe(
      takeUntil(this.destroy)
    ).subscribe((type) => this.stepper[type].next(true))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}

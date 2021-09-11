import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RecruiterInterface} from '@app/shared/types/backend/types/recruiter-interface';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterComponent implements OnInit {

  @Input() role: RecruiterInterface

  constructor() { }

  ngOnInit(): void {
  }

}

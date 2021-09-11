import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JobInterface} from "@app/shared/types/backend/types/job-interface";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit {

  jobs$: Observable<JobInterface[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    //this.jobs$ = this.store.pipe(select(selectAll))
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import {JobsComponent} from "@app/pages/jobs/components/jobs/jobs.component";
import { JobComponent } from './components/job/job.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [JobsComponent, JobComponent, FormComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }

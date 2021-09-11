import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from "@app/pages/jobs/components/jobs/jobs.component";

const routes: Routes = [
  {path: '', component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

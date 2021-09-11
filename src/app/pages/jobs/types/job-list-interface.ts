import {JobInterface as DBJob} from "@app/shared/types/backend/types/job-interface";

export interface JobListInterface extends DBJob {
  id: string
}

export type JobCreateRequest = DBJob;

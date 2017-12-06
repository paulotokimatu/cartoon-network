import { ScheduleHourDetails } from './schedule-hour-details.model';

export class Schedule {
  constructor (
    public hour: string,
    public details: ScheduleHourDetails[]
  ) {}
};

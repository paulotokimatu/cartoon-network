import { Subject } from 'rxjs/Subject';
import { scheduleByDay } from '../../_data/schedule-by-day';
import { ScheduleHourDetails } from '../../_models/schedule-hour-details.model';

export class ScheduleService {
  //TODO create model for details
  selectedDayChanged = new Subject<ScheduleHourDetails>();

  constructor() {
  }

  getSchedule(formattedDate) {
    return scheduleByDay[formattedDate];
  }

  setScheduleDetails(selectedDay) {
    this.selectedDayChanged.next(selectedDay);
  }
}
import { Subject } from 'rxjs/Subject';
import { cartoonsDetails } from '../../_data/cartoons-details';
import { scheduleByDay } from '../../_data/schedule-by-day';
import { Schedule } from '../../_models/schedule.model';

export class ScheduleService {
  selectedHourChanged = new Subject<Schedule>();

  constructor() {
  }

  getSchedule(formattedDate) {
    return scheduleByDay[formattedDate];
  }

  setScheduleDetails(selectedHour) {
    this.selectedHourChanged.next(selectedHour);
  }

  getCartoonDetails(cartoonId) {
    return cartoonsDetails[cartoonId];
  }

  getAllCartoonsDetails() {
    return cartoonsDetails;
  }
}

import { Subject } from 'rxjs/Subject';
import { scheduleByDay } from '../../_data/schedule-by-day';
import { ScheduleHourDetails } from '../../_models/schedule-hour-details.model';
import { cartoonsDetails } from '../../_data/cartoons-details';

export class ScheduleService {
  //TODO create model for details
  selectedHourChanged = new Subject<ScheduleHourDetails>();

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

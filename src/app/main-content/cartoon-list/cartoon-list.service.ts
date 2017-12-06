import { featuredCartoons } from '../../_data/featured-cartoons';
import { scheduleByCartoon } from '../../_data/schedule-by-cartoon';
import { scheduleByDay } from '../../_data/schedule-by-day';
import { ScheduleHourDetails } from '../../_models/schedule-hour-details.model';

export class CartoonListService {

  constructor() {
  }

  getFeaturedCartoons() {
    return [...featuredCartoons];
  }

  getOneCartoonSchedule(cartoonId) {
    return scheduleByCartoon[cartoonId];
  }
}

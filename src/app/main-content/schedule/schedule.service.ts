import { Subject } from 'rxjs/Subject';
import { scheduleByDay } from '../../_data/schedule-by-day';
import { ScheduleHourDetails } from '../../_models/schedule-hour-details.model';

export class ScheduleService {
  dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  currentDate: any;
  //TODO create model for details
  detailsChanged = new Subject<ScheduleHourDetails>();

  constructor() {
  }

  getCurrentDate() {
    let date = new Date();
    this.currentDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      dayWeek: this.dayWeek[date.getDay()],
      hour: date.getHours()
    }

    return this.currentDate;
  }

  parseFullDate(date) {
    return date.year + '/' + date.month + '/' + date.day;
  }

  getSchedule(date = this.currentDate) {
    return scheduleByDay[this.parseFullDate(date)];
  }

  setScheduleDetails(details) {
    this.detailsChanged.next(details);
  }
}
import { Subject } from "rxjs/Subject";
import { ParsedDate } from "../_models/parsed-date.model";

export class DateService {
  currentDate: Date = new Date();
  currentDateChanged = new Subject<{}>();
  
  dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
  constructor() {
  }

  getDate(): ParsedDate {
    let date: ParsedDate = {
      year: this.currentDate.getFullYear(),
      month: this.currentDate.getMonth() + 1,
      day: this.currentDate.getDate(),
      dayWeek: this.dayWeek[this.currentDate.getDay()],
      hour: this.currentDate.getHours(),
      formattedDate: this.currentDate.getFullYear() + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getDate()
    }
    return date;
  }

  getNextDay() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDateChanged.next(this.getDate());
  }
}
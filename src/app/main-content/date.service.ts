export class DateService {
  currentDate: Date = new Date();
  dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
  constructor() {
  }

  getDate() {
    let date = {
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
    return this.getDate();
  }
}
export class ScheduleService {
  dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  constructor() {
  }

  getCurrentDate() {
    let currentDate = new Date();

    return {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      day: currentDate.getDate(),
      dayWeek: this.dayWeek[currentDate.getDay()],
      hour: currentDate.getHours()
    }
  }
}
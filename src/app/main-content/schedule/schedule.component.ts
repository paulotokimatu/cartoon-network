import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Schedule } from '../../_models/schedule.model';
import { DateService } from '../date.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() currentHour: number;
  schedule: Schedule;
  //TODO model for date
  date: any;
  dateSub: Subscription;
  selectedSquare: number;
  loading: boolean = false;
  private squareClasses: string[] = ['hour-square--a', 'hour-square--b', 'hour-square--c'];

  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.loading = true;
    this.date = this.dateService.getDate();
    this.dateSub = this.dateService.currentDateChanged.subscribe(newDate => {
      this.loading = true;
      this.date = newDate;
      this.updateSchedule();
    })
    this.updateSchedule();
  }

  updateSchedule() {
    this.schedule = this.scheduleService.getSchedule(this.date.formattedDate);
    this.onSetScheduleDetails(this.schedule[this.currentHour], this.currentHour);
    this.loading = false;
  }

  onSetScheduleDetails(selectedHour, i) {
    this.selectedSquare = i;
    this.scheduleService.setScheduleDetails(selectedHour);
  }

  onGetNextDay() {
    this.dateService.getNextDay();
  }

  isCurrentHour(hour) {
    return this.currentHour === parseInt(hour);
  }

  squareColor(hour) {
    let intHour = parseInt(hour);
    return this.squareClasses[intHour % 3];
  }
}

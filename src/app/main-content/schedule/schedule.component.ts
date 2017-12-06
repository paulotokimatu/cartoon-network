import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ParsedDate } from '../../_models/parsed-date.model';
import { Schedule } from '../../_models/schedule.model';
import { DateService } from '../date.service';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() currentHour: number;
  schedule: Schedule;
  date: ParsedDate;
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
    return this.currentHour === parseInt(hour, 10);
  }

  squareColor(hour) {
    const intHour = parseInt(hour, 10);

    return this.squareClasses[intHour % 3];
  }
}

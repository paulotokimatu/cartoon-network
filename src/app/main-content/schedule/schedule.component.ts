import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Schedule } from '../../_models/schedule.model';
import { DateService } from '../date.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule;
  //TODO model for date
  date: any;

  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.schedule = this.scheduleService.getSchedule(this.date.formattedDate);
  }

  onSetScheduleDetails(details) {
    this.scheduleService.setScheduleDetails(details);
  }

  onAddDay() {
    this.date = this.dateService.getNextDay();
  }
}

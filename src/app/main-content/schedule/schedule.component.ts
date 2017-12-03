import { Component, OnInit } from '@angular/core';
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
  schedule: Schedule;
  //TODO model for date
  date: any;
  dateSub: Subscription;

  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.dateSub = this.dateService.currentDateChanged.subscribe(newDate => {
      this.date = newDate;
      this.updateSchedule();
    })
    this.updateSchedule();
  }

  updateSchedule() {
    this.schedule = this.scheduleService.getSchedule(this.date.formattedDate);
  }

  onSetScheduleDetails(selectedDay) {
    this.scheduleService.setScheduleDetails(selectedDay);
  }

  onGetNextDay() {
    this.dateService.getNextDay();
  }
}

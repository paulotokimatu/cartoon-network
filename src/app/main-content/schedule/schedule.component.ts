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
  schedule: Schedule;
  //TODO model for date
  date: any;
  dateSub: Subscription;
  @Input() currentHour: number;  

  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.dateSub = this.dateService.currentDateChanged.subscribe(newDate => {
      this.date = newDate;
      this.updateSchedule();
    })
    this.updateSchedule();

    //TODO: schedule-details doesn't receive this update
    console.log(this.currentHour);
    this.onSetScheduleDetails(this.schedule[this.currentHour]);
  }

  updateSchedule() {
    this.schedule = this.scheduleService.getSchedule(this.date.formattedDate);
  }

  onSetScheduleDetails(selectedHour) {
    this.scheduleService.setScheduleDetails(selectedHour);
  }

  onGetNextDay() {
    this.dateService.getNextDay();
  }

  isCurrentHour(hour) {
    console.log(this.currentHour === parseInt(hour));
    return this.currentHour === parseInt(hour);
  }
}

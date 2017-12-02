import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Schedule } from '../../_models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.schedule = this.scheduleService.getSchedule();
  }

  onSetScheduleDetails(details) {
    this.scheduleService.setScheduleDetails(details);
  }
}

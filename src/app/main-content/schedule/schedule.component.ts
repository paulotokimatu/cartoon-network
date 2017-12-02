import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule = {};

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.schedule = this.scheduleService.getSchedule();
  }

  onSetScheduleDetail(details) {
    this.scheduleService.setScheduleDetail(details);
  }
}

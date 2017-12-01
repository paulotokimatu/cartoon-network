import { Component, OnInit } from '@angular/core';
import { scheduleDay } from '../../_data/schedule-day';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  scheduleDay = {};

  constructor() { }

  ngOnInit() {
    this.scheduleDay = scheduleDay;
  }

}

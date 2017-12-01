import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule/schedule.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  currentDate = {};

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.currentDate = this.scheduleService.getCurrentDate();
  }

}

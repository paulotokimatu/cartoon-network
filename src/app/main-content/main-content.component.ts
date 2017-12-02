import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule/schedule.service';
import { DateService } from './date.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  date = {};
  
  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
  }

}

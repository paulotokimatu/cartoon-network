import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule/schedule.service';
import { DateService } from './date.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  date = {};
  dateSub: Subscription;
  
  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.dateSub = this.dateService.currentDateChanged.subscribe(newDate => {
      this.date = newDate;
    })
  }
}

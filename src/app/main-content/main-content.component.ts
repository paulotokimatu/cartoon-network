import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ParsedDate } from '../_models/parsed-date.model';
import { DateService } from './date.service';
import { ScheduleService } from './schedule/schedule.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  date: ParsedDate;
  dateSub: Subscription;

  constructor(private scheduleService: ScheduleService, private dateService: DateService) { }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.dateSub = this.dateService.currentDateChanged.subscribe(newDate => {
      this.date = newDate;
    })
  }

  getCurrentHour() {
    return this.date.hour;
  }
}

import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule/schedule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {
  details: any;
  detailsSub: Subscription;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.detailsSub = this.scheduleService.detailsChanged.subscribe(details => {
      this.details = details;
    })
  }
}

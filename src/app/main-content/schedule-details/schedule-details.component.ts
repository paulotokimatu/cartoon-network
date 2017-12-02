import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule/schedule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  details: any;
  detailsSub: Subscription;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.detailsSub = this.scheduleService.detailsChanged.subscribe(details => {
      this.details = details;
    })
  }
}

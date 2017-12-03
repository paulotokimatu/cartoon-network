import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../schedule/schedule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  selectedDay: any;
  selectedDaySub: Subscription;
  @Input() currentHour: number;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.selectedDaySub = this.scheduleService.selectedDayChanged.subscribe(selectedDay => {
      this.selectedDay = selectedDay;
    })
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../schedule/schedule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  selectedCartoon: any;
  showScheduleDetailsModal: boolean = false;
  selectedHour: any;
  selectedHourSub: Subscription;
  private containerClasses: string[] = [
    'container-schedule-details--a',
    'container-schedule-details--b',
    'container-schedule-details--c'
  ];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.selectedHourSub = this.scheduleService.selectedHourChanged.subscribe(selectedHour => {
      this.selectedHour = selectedHour;
      console.log(this.selectedHour);
    })
  }

  onOpenScheduleDetailsModal(cartoonId) {
    this.selectedCartoon = cartoonId;
    this.showScheduleDetailsModal = true;
  }

  onCloseScheduleDetailsModal() {
    this.showScheduleDetailsModal = false;
  }

  containerColor(hour) {
    let intHour = parseInt(hour);
    return this.containerClasses[intHour % 3];
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  allCartoonsSchedule: any;
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
    this.allCartoonsSchedule = this.scheduleService.getAllCartoonsDetails();
    this.selectedHourSub = this.scheduleService.selectedHourChanged.subscribe(selectedHour => {
      this.selectedHour = selectedHour;
    })
  }

  onOpenScheduleDetailsModal(cartoonId) {
    this.selectedCartoon = this.scheduleService.getCartoonDetails(cartoonId);
    this.showScheduleDetailsModal = true;
  }

  onCloseScheduleDetailsModal() {
    this.showScheduleDetailsModal = false;
  }

  containerColor(hour) {
    const intHour = parseInt(hour, 10);

    return this.containerClasses[intHour % 3];
  }
}

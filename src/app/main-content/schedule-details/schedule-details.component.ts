import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../schedule/schedule.service';
import { Subscription } from 'rxjs/Subscription';
//import { cartoonsDetails } from '../../_data/cartoons-details';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  selectedHour: any;
  selectedHourSub: Subscription;
  //allCartoonsDetails: any = cartoonsDetails;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.selectedHourSub = this.scheduleService.selectedHourChanged.subscribe(selectedHour => {
      this.selectedHour = selectedHour;
    })
  }
}

import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-details-modal',
  templateUrl: './schedule-details-modal.component.html',
  styleUrls: ['./schedule-details-modal.component.scss'],
  host: {
    '(click)': 'onClose()'
  }
})
export class ScheduleDetailsModalComponent implements OnInit {
  @Output() changeScheduleDetailsModal = new EventEmitter();
  @Input() selectedCartoon;
  
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.changeScheduleDetailsModal.emit(false);
  }
}

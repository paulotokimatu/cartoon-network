import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-details-modal',
  templateUrl: './schedule-details-modal.component.html',
  styleUrls: ['./schedule-details-modal.component.scss']
})
export class ScheduleDetailsModalComponent implements OnInit {
  @Output() changeScheduleDetailsModal = new EventEmitter();
  @Input() selectedCartoon;

  @HostListener('click') onClose() {
    this.changeScheduleDetailsModal.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }
}

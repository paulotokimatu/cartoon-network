import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { scheduleByCartoon } from '../../../_data/schedule-by-cartoon';

@Component({
  selector: 'app-cartoon-details-modal',
  templateUrl: './cartoon-details-modal.component.html',
  styleUrls: ['./cartoon-details-modal.component.scss'],
  host: {
    '(click)': 'onClose()'
  }
})
export class CartoonDetailsModalComponent implements OnInit {
  @Output() changeCartoonDetailsModal = new EventEmitter();
  @Input() selectedCartoon;
  allCartoons: any = scheduleByCartoon;
  
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.changeCartoonDetailsModal.emit(false);
  }
}

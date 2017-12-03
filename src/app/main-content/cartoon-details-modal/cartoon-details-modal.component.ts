import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cartoon-details-modal',
  templateUrl: './cartoon-details-modal.component.html',
  styleUrls: ['./cartoon-details-modal.component.scss'],
  host: {
    "(click)": "close()"
  }
})
export class CartoonDetailsModalComponent implements OnInit {
  @Output() changeCartoonDetailsModal = new EventEmitter();
  @Input() selectedCartoonDetails;
  
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.changeCartoonDetailsModal.emit(false);
  }
}

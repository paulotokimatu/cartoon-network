import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.changeCartoonDetailsModal.emit(false);
  }
}

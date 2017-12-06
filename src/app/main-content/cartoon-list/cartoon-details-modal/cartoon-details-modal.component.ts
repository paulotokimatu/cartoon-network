import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cartoon-details-modal',
  templateUrl: './cartoon-details-modal.component.html',
  styleUrls: ['./cartoon-details-modal.component.scss']
})
export class CartoonDetailsModalComponent implements OnInit {
  @Output() changeCartoonDetailsModal = new EventEmitter();
  @Input() selectedCartoon;

  @HostListener('click') onClose() {
    this.changeCartoonDetailsModal.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }
}

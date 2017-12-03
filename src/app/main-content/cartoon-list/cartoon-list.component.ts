import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cartoonsDetails } from '../../_data/cartoons-details';
import { cartoonsFeatured } from '../../_data/cartoons-featured';

@Component({
  selector: 'app-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.scss']
})
export class CartoonListComponent implements OnInit {
  @Output() changeCartoonDetailsModal = new EventEmitter();
  @Output() changeSelectedCartoon = new EventEmitter();
  
  allCartoons: any;
  featuredCartoons: string[];

  constructor() { }

  ngOnInit() {
    this.allCartoons = cartoonsDetails;
    this.featuredCartoons = cartoonsFeatured;
  }

  onShowDetails(cartoon) {
    this.changeCartoonDetailsModal.emit(true);
    this.changeSelectedCartoon.emit(cartoon);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { scheduleByCartoon } from '../../_data/schedule-by-cartoon';
import { cartoonsFeatured } from '../../_data/cartoons-featured';

@Component({
  selector: 'app-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.scss']
})
export class CartoonListComponent implements OnInit {
  featuredCartoons: string[];
  visibleFeaturedCartoons: string[];
  maxVisibleFeaturedCartoons: number = 5;
  startIndex: number = 0;  
  selectedCartoon: any;
  showCartoonDetailsModal: boolean = false;

  constructor() { }

  ngOnInit() {
    this.featuredCartoons = cartoonsFeatured;
  }

  onOpenCartoonDetailsModal(cartoon) {
    console.log(cartoon)
    this.selectedCartoon = cartoon;
    this.showCartoonDetailsModal = true;
  }

  onCloseCartoonDetailsModal() {
    this.showCartoonDetailsModal = false;
  }

  onChangeVisibleCartoons(change) {
    let newIndex = this.startIndex + change;
    if (newIndex >= 0 && newIndex + this.maxVisibleFeaturedCartoons <= this.featuredCartoons.length)
    { 
      this.startIndex = newIndex;      
    }
  }
}

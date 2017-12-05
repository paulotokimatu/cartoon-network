import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartoonListService } from './cartoon-list.service';

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

  constructor(private cartoonListService: CartoonListService) { }

  ngOnInit() {
    this.featuredCartoons = this.cartoonListService.getFeaturedCartoons();
  }

  onOpenCartoonDetailsModal(cartoon) {
    this.selectedCartoon = this.cartoonListService.getOneCartoonSchedule(cartoon);
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

import { Component, OnInit } from '@angular/core';
import { cartoonsDetails } from '../../_data/cartoons-details';
import { cartoonsFeatured } from '../../_data/cartoons-featured';

@Component({
  selector: 'app-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.scss']
})
export class CartoonListComponent implements OnInit {
  allCartoons: any;
  featuredCartoons: string[];

  constructor() { }

  ngOnInit() {
    this.allCartoons = cartoonsDetails;
    this.featuredCartoons = cartoonsFeatured;
    console.log(this.allCartoons);
  }

}

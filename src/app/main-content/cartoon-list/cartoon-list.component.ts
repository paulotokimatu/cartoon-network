import { Component, OnInit } from '@angular/core';
import { cartoonDetails } from '../../_data/cartoon-details';

@Component({
  selector: 'app-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.scss']
})
export class CartoonListComponent implements OnInit {
  featuredCartoons = ['regularShow', 'jorelsBrother'];
  allCartoons: any;

  constructor() { }

  ngOnInit() {
    this.allCartoons = cartoonDetails;
  }

}

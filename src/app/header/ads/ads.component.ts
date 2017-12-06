import { Component, OnInit } from '@angular/core';
import { cartoonsAds } from '../../_data/cartoons-ads';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  cartoonFeatured: string = 'gumball';
  allCartoonsAds = cartoonsAds;

  constructor() { }

  ngOnInit() {
  }
}

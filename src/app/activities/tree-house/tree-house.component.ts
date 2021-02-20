import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../../../assets/galery/swiper.js';
declare var Swiper: any;

@Component({
  selector: 'app-tree-house',
  templateUrl: './tree-house.component.html',
  styleUrls: ['./tree-house.component.css']
})
export class TreeHouseComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide:2,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }


}

import { Component, AfterViewInit } from '@angular/core';
import '../../../assets/galery/swiper.js';
declare var Swiper: any;

@Component({
  selector: 'app-ecological-routes',
  templateUrl: './ecological-routes.component.html',
  styleUrls: ['./ecological-routes.component.css']
})
export class EcologicalRoutesComponent implements AfterViewInit {

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

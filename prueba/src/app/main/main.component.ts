import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor () {}
  customOptions: OwlOptions = {
    autoWidth: false,
    loop: true,
    mouseDrag: true,

    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsData: true,
    // margin: 2,
    center: true,
    // slideBy: 2,
    navSpeed: 700,
    URLhashListener: true,
    freeDrag: true,
    stagePadding: 30,
    startPosition: 'URLHash',

    navText: [
      `<em class='fa fa-chevron-left'></em>`,
      `<em class="fa fa-chevron-right"></em>`,
    ],
    // navText: ['Anterior', 'Siguiente'],
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
  };
  slidesStore = [
    { id: '1', title: 'IMG 1', img: 'assets/main/a.jpg' },
    { id: '2', title: 'IMG 1', img: 'assets/main/2.jpg' },
    { id: '3', title: 'IMG 1', img: 'assets/main/3.jpg' },
    { id: '4', title: 'IMG 1', img: 'assets/main/4.jpg' },
    // { id: '5', title: 'IMG 1', img: 'assets/5.jpg' },
    // { id: '4', title: 'IMG 1', img: 'assets/images/55073.png' },
    // { id: '4', title: 'IMG 1', img: 'assets/images/2803207.png' },
  ];
  ngOnInit(): void{

  }
}

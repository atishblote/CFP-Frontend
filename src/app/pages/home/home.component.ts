import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare $ as a global variable
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.owl-carousel-hero').owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000, 
      loop: true,
    });
  }


  
}

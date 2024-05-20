import { Component, AfterViewInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
declare var $: any; // Declare $ as a global variable

@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.component.html',
  styleUrls: ['./related-post.component.scss'],
})
export class RelatedPostComponent implements AfterViewInit {
  @Input() data: any;
  constructor(private router: Router){}
  ngAfterViewInit() {
    $('.owl-carousel-upcoming').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav:true,
      margin: 30,
    });
  }


  navigate(endpoint:string){
    this.router.navigate([endpoint])
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
declare var $: any; // Declare $ as a global variable
@Component({
  selector: 'app-aside-next-prediction',
  templateUrl: './aside-next-prediction.component.html',
  styleUrls: ['./aside-next-prediction.component.scss']
})
export class AsideNextPredictionComponent implements OnInit {
  img1:string = "assets/img/team1.png"
  img2:string = "assets/img/team2.png"
  message:string = ''
  notLoaded:boolean = true
  getFantacy:any
  resData:any
  // matchStartTime: Date = new Date('2023-10-17T14:00:00');

  constructor(private global:GlobalService){}

  ngOnInit() {
    this.global.getUpcommingFantacy('upcomming-fantacy').subscribe({
      next: res=>{
        this.resData = res
        if(!res.code){
          
          this.message = "No upcomming matches"
        }else{
         // Filter only upcoming matches based on the current date
         const currentDate = new Date();
         this.getFantacy = res.data.filter((match:any) => new Date(match.date_time) > currentDate);
         this.notLoaded = false
         console.log(this.getFantacy)
        
        }
      },
      error: err=>{

      }
    })
      setTimeout(()=>{
        $('.owl-carousel-upcoming').owlCarousel({
          items: 1,
          margin: 20,
          nav: true,
          navText: ["prev", "next"]
        });
      },1200)
    }

    scrollToTop() {
      window.scrollTo(0, 0); // Scrolls the page to the top
    }
}

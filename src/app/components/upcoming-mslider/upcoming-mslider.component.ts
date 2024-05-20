import { Component , OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
declare var $: any; // Declare $ as a global variable

@Component({
  selector: 'app-upcoming-mslider',
  templateUrl: './upcoming-mslider.component.html',
  styleUrls: ['./upcoming-mslider.component.scss']
})
export class UpcomingMSliderComponent  implements OnInit {
  img1:string = "assets/img/team1.png"
  img2:string = "assets/img/team2.png"
  message:string = ''
  notLoaded:boolean = true
  getFantacy:any
  resData:any
  isData: boolean = false
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
        if(this.getFantacy.length <= 0){
          this.isData= false
          this.message = "No upcomming matches"
        }else{
          this.isData=true
        }
        }
      },
      error: err=>{

      }
    })
      console.log("2")
      setTimeout(()=>{
        $('.owl-carousel-upcoming').owlCarousel({
          items: 3,
          margin: 20,
      });
      },1000)
    }

    scrollToTop() {
      window.scrollTo(0, 0); // Scrolls the page to the top
    }
}

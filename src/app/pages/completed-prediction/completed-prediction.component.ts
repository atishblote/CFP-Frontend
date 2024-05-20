import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-completed-prediction',
  templateUrl: './completed-prediction.component.html',
  styleUrls: ['./completed-prediction.component.scss'],
})
export class CompletedPredictionComponent implements OnInit {
  notLoaded: boolean = true;
  bettingScore: any;
  matchAllData:any
  matchByidData:any
  data: any;
  bollingScore: any;
  scoreData: any;
  batsmen1:any
  batsmen2:any
  bowlers1:any
  bowlers2:any
  bettingTeamOne:any
  rapidId:any
  numEntriesToShow: number = 2;
  commentryData: any[] = []
  constructor(private globalService: GlobalService, private actRouter: ActivatedRoute) {}
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top
    setTimeout(() => {
      this.notLoaded = false
    }, 1000); // 2000 milliseconds = 2 seconds
    this.actRouter.params.subscribe(param=>{
      const id = param['id']
      console.log(id)
      this.globalService.getUpcommingFantacy(`upcomming-fantacy/${id}`).subscribe({
        next: res=>{
          this.matchByidData = res.data[0]
          this.rapidId = this.matchByidData.rapid_match_id
          console.log(this.matchByidData)
          console.log(this.rapidId)
          this.callMatchData(this.rapidId)
        },
        error:err=>{
          console.log(err)
        }
      })
    })

  }

  callMatchData(id:any){
        // get match data
        this.globalService.getCommentry(id,"scard").subscribe({
          next: res =>{
            // real  API remove res[0]. => res.
            this.matchAllData = res
            console.log(this.matchAllData)
            this.scoreData = res.scoreCard
            console.log(this.scoreData)
            this.batsmen1 = Object.values(res.scoreCard[0].batTeamDetails.batsmenData);
            this.batsmen2 = Object.values(res.scoreCard[1].batTeamDetails.batsmenData);
            this.bowlers1 = Object.values(res.scoreCard[0].bowlTeamDetails.bowlersData);
            this.bowlers2 = Object.values(res.scoreCard[1].bowlTeamDetails.bowlersData);
            console.log(this.batsmen1)
          },
          error: err =>{
            console.log("error")
    
          },
        });

        // this.globalService.gerScore("score").subscribe({
        //   next: res =>{
        //     // real  API remove res[0]. => res.
        //     this.scoreData = res.data.scorecard
        //     this.data = res.data
        //     console.log(res)
        //     console.log(this.scoreData)
        //   },
        //   error: err =>{
        //     console.log("error")
    
        //   },
        // });
    
        // commentry call
          this.globalService.getCommentry(id,"comm").subscribe({
            next: res=>{  
              this.commentryData = res.commentaryList
              console.log(this.commentryData)
            },
            error: err=>{
              console.log("commentry error")
            }
          })
  }

  showMore() {
    this.numEntriesToShow = 10;
  }
}

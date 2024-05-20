import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-upcoming-prediction',
  templateUrl: './upcoming-prediction.component.html',
  styleUrls: ['./upcoming-prediction.component.scss']
})
export class UpcomingPredictionComponent  implements OnInit{
  getAllMatchData:any
  getMatchInfo: any
  notLoaded:boolean = true
  is_info:boolean = false
  message:string = " "
  putData:any
  getRapidId:any = "82455"
  // refer :  https://rapidapi.com/cricketapilive/api/cricbuzz-cricket/
  constructor(private global: GlobalService, private actRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.actRouter.params.subscribe(param=>{
      const id = param['id']

      this.global.getUpcommingFantacy(`blog-fantacy/${id}`).subscribe({
        next: res=>{
          this.getAllMatchData = res.data[0]
          console.log(this.getAllMatchData)
          this.getMatchInfoFunc(this.getAllMatchData.rapid_match_id)
          this.putData = this.getAllMatchData.attached_package
        },
        error: err=>{
          console.log(err)
        }
      })

    })
    window.scrollTo(0, 0); // Scrolls the page to the top
    setTimeout(() => {
      this.notLoaded = false
    }, 1000); // 2000 milliseconds = 2 seconds
  }

  getMatchInfoFunc(id:any){
    console.log(id)
    this.global.getMatchInfo(id).subscribe({
      next: res=> {
        this.is_info = true
        console.log(res)
        if(res != null){
          this.getMatchInfo = res.matchInfo
          console.log(this.getMatchInfo)
        }else{
          this.is_info = false
          this.message = "Not Found"
        }
        
      },
      error: err =>{
        console.log(err)
        this.message = "Not Found"
      }
    })
  }

}

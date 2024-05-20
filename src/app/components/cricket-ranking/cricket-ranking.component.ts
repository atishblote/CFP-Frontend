import { Component } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-cricket-ranking',
  templateUrl: './cricket-ranking.component.html',
  styleUrls: ['./cricket-ranking.component.scss']
})
export class CricketRankingComponent {

  rankings:any
  notLoaded:boolean=  true;
  lastUpdates:string = ''
  constructor(private globalService: GlobalService) {}
  ngOnInit() {
    // Initialize the default tab
     this.loadRankings('test', 'teams');
  }

  tabChanged(event: any) {
  this.notLoaded= true;

    if (event.index === 0) {
      // Tab "TEST" was clicked
      this.loadRankings('test', 'teams');
    } else if (event.index === 1) {
      // Tab "ODI" was clicked
      this.loadRankings('odi', 'teams');
    } else if (event.index === 2) {
      // Tab "T20" was clicked
      this.loadRankings('t20', 'teams');
    }
  }
  loadRankings(type: string, category: string) {
    this.globalService.getRankings(type, category).subscribe((data) => {
      console.log(data)
      this.rankings = data.rank.slice(0, 5);
      console.log(this.rankings)
      this.lastUpdates = this.rankings[0].lastUpdatedOn
      this.notLoaded = false

    });
  }
}

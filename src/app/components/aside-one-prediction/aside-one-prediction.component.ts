import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-aside-one-prediction',
  templateUrl: './aside-one-prediction.component.html',
  styleUrls: ['./aside-one-prediction.component.scss']
})
export class AsideOnePredictionComponent implements OnChanges {
  @Input() matchData: any;
  fantacyData: any;
  img1: string = "assets/img/team1.png";
  img2: string = "assets/img/team2.png";
  matches = [
    {
      "id": "ddd42a96-70c4-43c6-bc99-25d12e91ebfa",
      "name": "Ireland Women vs Scotland Women, 2nd T20I",
      "dateTimeGMT": "2023-10-29T14:00:00",
    }
  ];

  ngOnChanges() {
    // Assuming you want to assign matchData to fantacyData
    this.fantacyData = this.matchData;
    console.log(this.matchData);
  }

  scrollToTop() {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }
}

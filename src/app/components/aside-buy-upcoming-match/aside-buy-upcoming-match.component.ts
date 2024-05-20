import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-buy-upcoming-match',
  templateUrl: './aside-buy-upcoming-match.component.html',
  styleUrls: ['./aside-buy-upcoming-match.component.scss']
})
export class AsideBuyUpcomingMatchComponent {
  img1:string = "assets/img/team1.png"
  img2:string = "assets/img/team2.png"
  // matchStartTime: Date = new Date('2023-10-17T14:00:00');
  matches = [
    {
      "id": "ddd42a96-70c4-43c6-bc99-25d12e91ebfa",
      "name": "Ireland Women vs Scotland Women, 2nd T20I",
      "dateTimeGMT": "2023-10-18T14:00:00",
    },
    {
      "id": "ddd42a96-70c4-43c6-bc99-25d12e91ebfa",
      "name": "Ireland Women vs Scotland Women, 2nd T20I",
      "dateTimeGMT": "2023-10-18T13:30:00",
    },
    // Add more matches
  ];
}

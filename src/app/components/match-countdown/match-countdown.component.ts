import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-match-countdown',
  templateUrl: './match-countdown.component.html',
  styleUrls: ['./match-countdown.component.scss']
})
export class MatchCountdownComponent implements OnInit {
  @Input() matchStartTime: any; // Date string in ISO format
  countdownValue: any;
  countdownInterval: any;


  ngOnInit() {
    // this.calculateCountdown();
    // this.startCountdown();
  }
  
  ngOnChanges() {
    this.calculateCountdown();
    this.startCountdown();
  }

  calculateCountdown() {
    console.log(this.matchStartTime)
    const currentTime = new Date().getTime();
    const matchTime = new Date(this.matchStartTime).getTime();
    const timeDifference = matchTime - currentTime;
    this.countdownValue = Math.max(0, Math.floor(timeDifference / 1000));
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.countdownValue > 0) {
        this.countdownValue--;
      } else {
        clearInterval(this.countdownInterval);
        // You can perform actions when the match starts.
      }
    }, 1000); // Update the countdown every second (1000ms).
  }

  formatCountdown(countdownValue: number): string {
    const days = Math.floor(countdownValue / 86400);
    const hours = Math.floor((countdownValue % 86400) / 3600);
    const minutes = Math.floor((countdownValue % 3600) / 60);
    const seconds = countdownValue % 60;

    return `${this.padZero(days)} Days ${this.padZero(hours)} Hr ${this.padZero(minutes)} Min ${this.padZero(seconds)} Sec`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
}



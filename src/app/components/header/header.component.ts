import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  fullName: string = '';
  constructor(private globle: GlobalService){}
  ngOnInit(): void {
    this.isAuthenticated = this.globle.isAuthenticated();
    const userData = this.globle.getUserData();
    if (userData) {
      this.fullName = userData?.first_name; // Adjust this based on your user data structure
    }
  }

  signOut(): void {
    if(confirm("Do you want to logout")){
      this.globle.signOut();
      this.isAuthenticated = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-archived-blogs',
  templateUrl: './archived-blogs.component.html',
  styleUrls: ['./archived-blogs.component.scss'],
})
export class ArchivedBlogsComponent implements OnInit {
  resData:any
  message:any
  getPrediction:any
  constructor(private router: Router, private global: GlobalService) {}

  ngOnInit(): void {
    this.global.getUpcommingFantacy('all-blogs').subscribe({
      next: (res) => {
        this.resData = res;
        if (!res.code) {
          console.log(res.message);

          this.message = 'No upcomming matches';
        } else {
          // Filter only upcoming matches based on the current date
          this.getPrediction = res.data
          console.log(this.getPrediction);
        }
      },
      error: (err) => {},
    });
  }

  navigate(endpoint: string, id:any, slug:string) {
    const queryParams = {
      id: id
    };
  
    this.router.navigate([`${endpoint}/${slug}`], { queryParams });
    // this.router.navigate([`${endpoint}/${id}`]);
  }
}

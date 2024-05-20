import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  notLoaded:boolean = true

ngOnInit(): void {
  setTimeout(() => {
    this.notLoaded = false
  }, 1000); // 2000 milliseconds = 2 seconds
  
}
}

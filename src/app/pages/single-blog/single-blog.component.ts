import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  parentData: any = 'Data from parent';
  notLoaded:boolean = true
  getSingleData:any
  fantacyId:any
  fantacyData:any
  dataPut:any
  constructor(private actRouter: ActivatedRoute, private global: GlobalService, private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scrolls the page to the top

    this.actRouter.queryParams.subscribe(params =>{
      console.log(params)
      const id = params['id']

      // call api
      this.global.getUpcommingFantacy(`all-blogs/${id}`).subscribe({
        next: (res)=>{
          console.log(res)
          this.getSingleData = res.data[0]
          this.fantacyId = this.getSingleData.fantacy_id
          this.getfantacyDataFun(this.fantacyId)
          console.log(this.fantacyId)
        },
        error: (err)=>{
          console.log(err)
        }
      })
      
    })
    
    setTimeout(() => {
      this.notLoaded = false
    }, 1000); // 2000 milliseconds = 2 seconds
    
  }

  getfantacyDataFun(id:any){
    this.global.getUpcommingFantacy(`blog-fantacy/${id}`).subscribe({
      next:res=>{
        this.fantacyData = res.data[0]
        this.dataPut = this.fantacyData
        console.log(this.fantacyData)
      },
      error: err=>{
        console.log(err)
      }
    })
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

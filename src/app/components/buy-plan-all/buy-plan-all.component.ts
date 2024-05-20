import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';
declare var Razorpay: any;
@Component({
  selector: 'app-buy-plan-all',
  templateUrl: './buy-plan-all.component.html',
  styleUrls: ['./buy-plan-all.component.scss']
})
export class BuyPlanAllComponent implements OnInit{
  @Input() getData : any
  getfantacyData:any
  // formData: any = {
    //   amount: 120,
    //   product_name: 'Bat',
    //   product_desc: 'Cricket Bat'
    // };
    apiKey:any
    packageForm:any
    amount:any
    product_desc:any
    product_name:any
    constructor(private globle:GlobalService, private router: Router){}
    
    ngOnInit(): void {
      //this.apiKey=   this.globle.getApikey()
      this.apiKey=   this.globle.getUserData()
      console.log(this.apiKey)
      console.log(this.apiKey?.token)
    }
    ngOnChanges() {
      this.getfantacyData = this.getData
    console.log(this.getfantacyData)
  }




  buyPlanFun(coleamount:any,name:string,desc:string): void {
    const formData = {
      amount: coleamount,
      product_name: name,
      product_desc:desc,
      name: `${this.apiKey?.first_name}(${this.apiKey?.username})`,
      email:this.apiKey?.email,
      contact: this.apiKey?.number
    }
    if (this.apiKey === null) {
      console.log("Empty API")
      this.router.navigate(['/login'])
    } else {
      if(coleamount > 0 ){
        this.globle.createOrder(formData).subscribe(
          (res: any) => {
            if (res.success) {
              const options = {
                key: res.key_id,
                amount: res.amount,
                currency: 'INR',
                name: res.product_name,
                description: res.description,
                image: 'https://dummyimage.com/600x400/000/fff',
                order_id: res.order_id,
                handler: (response: any) => {
                  alert('Payment Succeeded');
                  // Add logic to handle successful payment
                },
                prefill: {
                  contact: res.contact,
                  name: res.name,
                  email: res.email
                },
                notes: {
                  description: res.description
                },
                theme: {
                  color: '#2300a3'
                }
              };
  
              const razorpayObject = new Razorpay(options);
              razorpayObject.on('payment.failed', (response: any) => {
                alert('Payment Failed');
                // Add logic to handle failed payment
              });
              razorpayObject.open();
            } else {
              alert(res.msg);
            }
          },
          (error) => {
            console.error('Error creating order:', error);
          }
        );
      }      
    }


  }
}

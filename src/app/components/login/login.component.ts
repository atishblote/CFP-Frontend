import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: any
  message:string = ''
  password: string = '';
  passwordType: string = 'password';
  numberOtp:any
  isDesable:boolean= true
  text:string = "OTP"
  otp:any
  varified:string= 'true'
  sentOtp:boolean = true
  filedDisable:boolean = false

  constructor(private global: GlobalService, private fb: FormBuilder, private toastr: ToastrService, private router:Router){
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      is_active: [{ value: '', disabled: this.filedDisable }],
      number: [{ value: '', disabled: this.filedDisable }, Validators.required],
    })
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
  togglePasswordVisibilityHide(){
    this.passwordType = this.passwordType === 'text' ? 'password' : 'password';
  }
  sentOpt(value:any){
    if(value.length === 10){
      this.sentOtp = false
    }else{
      this.sentOtp = true
    }
   
  }
  // checek number
  checknumber(number:any){
    // console.log(number.length)
    if(number.length === 10){
      this.isDesable = false
    }else{
      this.isDesable = true
    }
  }
  checkOtp(value:any){
    console.log(value)
   if(value == 1234){
    this.toastr.success('OTP is valid', 'Varified');
    this.text = "Done"
    this.sentOtp = true
    this.filedDisable = true
   }else{
    this.toastr.warning('Enter Valid OTP', 'Invalid');
    this.text = "invalid"
    this.sentOtp = true
    setTimeout(()=>{
      this.text = "OTP"
    },1200)
   }
  }
  onSubmit(value:any) {
    // Handle form submission
    console.log(value);
   if(value.is_active !== false){
    this.global.signUpUser(value,'user/signup').subscribe({
      next:(res)=>{
        console.log(res)
        this.toastr.success(res.message, 'Success');
        this.myForm.reset();
      },
      error: (err)=>{
        console.log(err)
        this.toastr.error(err.message, 'Error');
      }
    })
   }else{
    this.toastr.warning('Varify phone number', 'Warning');
   }
  }
  

  // login
  loginFun(value:any){
    console.log(value)
    if(value.email !== '' && value.password !== ''){
      const data ={
        "email":value.email,
        "password":value.password
      }
      this.global.signUpUser('user/login',data).subscribe({
        next:(res)=>{
          console.log(res)
          this.global.userLogin(res)

          this.toastr.success(res.message, 'Success');
          this.myForm.reset();
          setTimeout(()=>{
            window.location.reload();
          },2000)
        },
        error:(err)=>{
          console.log(err)
          this.toastr.error(err.error.message, 'Error');
        }
      })
    } else {
    this.toastr.warning('Fill the all details', 'Warning');
    }
  }



}

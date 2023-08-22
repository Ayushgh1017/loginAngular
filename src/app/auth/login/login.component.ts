import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  // forbiddenNames: any;
  constructor(private formBuilder: FormBuilder, private authService:AuthService,private router: Router) {} 

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required]),
        'password':new FormControl(null,[Validators.required])
      })
    })
  }
  
  onLogin(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.userData)
      if(this.authService.validateLogin(this.loginForm.value.userData)){
        console.log("Login successfull!! Yayyyyy");

      }
      else{
        console.log("Shit yrrr")
      }
     
    }
  }
}

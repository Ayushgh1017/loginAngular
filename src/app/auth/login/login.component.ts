import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder, private authService:AuthService,private router: Router) {} 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  id:string = this.loginForm.value.username;
  pass:string = this.loginForm.value.pass;

  formInput: IUser = {
    loginId: this.id,
    password: thispass
  }
  onLogin() {
    if (this.loginForm.valid) {
      // if(this.authService.validateLogin(this.formInput)){
      //   this.router.navigate(['posts']);
      // }
     
    }
  }
}

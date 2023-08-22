import { Injectable } from '@angular/core';

export interface IUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: IUser[] = [
    {
      username: 'ayush',
      password: '1234'
    }
  ];
  
  isLoggedIn: boolean = false;

  constructor() {}

  validateLogin(users: IUser):boolean {
    const validUser = this.users.find(u => u.username === users.username && u.password === users.password);
    if (validUser) {
      this.isLoggedIn = true;
    }
    const flag=this.isLoggedIn;
    this.isLoggedIn=false;
    return flag;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

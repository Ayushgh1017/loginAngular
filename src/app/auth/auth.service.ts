import { Injectable } from '@angular/core';

export interface IUser {
  loginId: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: IUser[] = [
    {
      loginId: 'ayush',
      password: '1234'
    }
  ];
  
  isLoggedIn: boolean = false;

  constructor() {}

  validateLogin(user: IUser):boolean {
    const validUser = this.users.find(u => u.loginId === user.loginId && u.password === user.password);
    if (validUser) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

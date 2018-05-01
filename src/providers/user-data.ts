import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const env = "localhost:5984";

@Injectable()
export class UserDataProvider {

  IS_LOGGED_IN: boolean = true;


  constructor(public http: HttpClient) {

  }

  login(username: string, password: string) {
    console.log("LoggedIn");
    this.IS_LOGGED_IN = true;
  }

  logout() {
    console.log("LoggedOut");
    this.IS_LOGGED_IN = false;
  }

  signup(username: string, password: string, role: string) {

  }

}

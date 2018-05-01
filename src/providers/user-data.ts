import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



const env = "http://localhost:5984/";
// make sure in local.ini has cors enabled and allows localhost as origin

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
    let url = env + "_users/org.couchdb.user:" + username;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    let data;
    data = {
      name: username,
      password: password,
      roles: [role],
      type: "user",
      datasub: []
    };

    data = JSON.stringify(data);

    console.log(url);

    return this.http.put(url, data, httpOptions).map(res => res)
      .subscribe(
        err => console.log(err),
        () => console.log('LoggedIn')
      );


  }

}

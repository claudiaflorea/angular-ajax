import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { User } from "./models/User";

@Injectable({
    providedIn: 'root'
  })
  export class UsersService {
    private url = 'https://reqres.in/api/users';
     
    constructor(private httpClient: HttpClient) { }
    
    getUsers(){
      return this.httpClient.get(this.url)
      .pipe(map((data: any) => {
        return data.data;
      }))
    }
    
  }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apuUrl = 'http://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) {


   }

   getUsers(){
     return this._http.get<User[]>(this.apuUrl);
   }
}

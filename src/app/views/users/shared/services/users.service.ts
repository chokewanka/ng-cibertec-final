import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import User from '../../models/user.model';
import Experience from '../../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api: string = environment.api;
  private endpoint: string = 'users';

  constructor( 
    private http: HttpClient
  ) {

  }

  getUsers(){
    const URL:string = `${this.api}/${this.endpoint}/`;
    return this.http.get(URL);
  }

  getUser(id: number){
    const URL:string = `${this.api}/${this.endpoint}/${id}/`;
    return this.http.get(URL);
  }

  deleteUser(id: number){
    const URL:string = `${this.api}/${this.endpoint}/${id}/`;
    return this.http.delete(URL);
  }

  createUser(user:User){
    const URL:string = `${this.api}/${this.endpoint}/`;

    return this.http.post(URL, user, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }

  updateUser(user:User){
    const URL:string = `${this.api}/${this.endpoint}/${user.id}/`;

    return this.http.put(URL, user, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }

}

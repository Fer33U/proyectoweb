import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  signup(user: any){
    return this.http.post<any>(this.URL + '/registro', user);

  }


  signin(user: any){
    return this.http.post<any>(this.URL + '/iniciar', user);

  }



}

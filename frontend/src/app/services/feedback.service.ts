import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class feedBackService {

  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPrivateDatos() {
    return this.http.get<any>(this.URL + '/datos');
  }

}

import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = `${localStorage.getItem('ServerUrl')}/Product/Comment`;
  constructor(private http: HttpClient) { }
  public paging() {
    return this.http.get(`${this.baseUrl}`);
  }
}

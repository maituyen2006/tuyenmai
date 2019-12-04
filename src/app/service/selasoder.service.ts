import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salesoder} from "../class/salesoder";

@Injectable({
  providedIn: 'root'
})
export class SelasoderService {

  constructor(private http : HttpClient) { }

  baseUrl=`${localStorage.getItem("ServerUrl")}/SO/List`;

  public paging(){
    return this.http.get(`${this.baseUrl}`);
  }
  public getsalesoderEdit(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

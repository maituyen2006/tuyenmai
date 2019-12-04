import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from 'app/class/products';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // ServerUrl = `http://coconutcraft.azurewebsites.net/Product/List`;
    baseUrl = `${localStorage.getItem( 'ServerUrl' )}/Product/List`;
  constructor(private http: HttpClient) { }
  public paging() {
    return this.http.get(`${this.baseUrl}`);
  }
  public pagingActive() {
    return this.http.get(`${this.baseUrl}/Available`);
  }
  public insert(product) {
    return this.http.post(`${this.baseUrl}`, product);
  }
  public getProductedit(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  public edit(product){
    return this.http.put(`${this.baseUrl}`,product);
  }
  public delete(id: String){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  public findAllAvaiable() {
    return this.http.get(`${this.baseUrl}/FindAllAvaiable`);
  }
  public productDetail(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

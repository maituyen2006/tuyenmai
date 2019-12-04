import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Supplier } from 'app/class/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  // ServerUrl = 'https://coconutcraft2.azurewebsites.net/Supplier/List';
  baseUrl = `${localStorage.getItem('ServerUrl')}/Supplier/List`;
  constructor(private http: HttpClient) { }
  public paging() {
    return this.http.get(`${this.baseUrl}`);
  }
  public insert(supplier) {
    return this.http.post(`${this.baseUrl}`,supplier);
  }
public edit(supplier){
  return this.http.put(`${this.baseUrl}`, supplier)
}
  public deleteProduct(id): Observable<Supplier>{
    return this.http.delete<Supplier>(`${this.baseUrl}/${id}`);
  }
  public addProduct(product): Observable<Supplier>{
    return this.http.post<Supplier>(this.baseUrl, product);
  }
  public getProductEdit(id): Observable<Supplier>{
    return this.http.get<Supplier>(`${this.baseUrl}/${id}`);
  }
  public editProduct(product): Observable<Supplier>{
    return this.http.put<Supplier>(`${this.baseUrl}/${product.productId}`,product)
  }
}

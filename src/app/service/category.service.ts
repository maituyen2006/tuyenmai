import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from 'app/class/category';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    // ServerUrl = 'https://coconutcraft.azurewebsites.net/Category/List';
    baseUrl = `${localStorage.getItem('ServerUrl')}/Category/List`;
    constructor(private http: HttpClient) { }
    public paging() {
      return this.http.get(`${this.baseUrl}`);
    }
    public pagingActive() {
      return this.http.get(`${this.baseUrl}/Available`);
    }
    public pagingCategoryProduct(categoryId) {
      return this.http.get(`${this.baseUrl}/${categoryId}/Product`);
    }
    public insert(role) {
      return this.http.post(`${this.baseUrl}`, role);
    }
    public edit(category){
      return this.http.put(`${this.baseUrl}`,category);
    }
    public paging1(): Observable<Category[]>{
      return this.http.get<Category[]>(this.baseUrl);
    }
    public deleteCategory(id): Observable<Category>{
      return this.http.delete<Category>(`${this.baseUrl}/${id}`);
    }
    public addCategory(category): Observable<Category>{
      return this.http.post<Category>(this.baseUrl, category);
    }
    public getCategoryEdit(id): Observable<Category>{
      return this.http.get<Category>(`${this.baseUrl}/${id}`);
    }


  }
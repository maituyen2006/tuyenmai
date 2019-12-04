import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from 'app/class/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // baseUrl1 = 'https://coconutcraft.azurewebsites.net/Account/List';
  baseUrl = `${localStorage.getItem('ServerUrl')}/Account/List`;
  constructor(private http: HttpClient) { }
  public paging() {
    return this.http.get(`${this.baseUrl}`);
  }
  public insert(role) {
    return this.http.post(`${this.baseUrl}`,role);
  }
  public edit(role) {
    return this.http.put(`${this.baseUrl}`,role);
  }
  public delete(accountId) {
    return this.http.delete(`${this.baseUrl}/${accountId}`);
  }
  public insertMember(role) {
    return this.http.post(`${this.baseUrl}`,role);
  }
  public paging1(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl);
  }
  public accountDetail(accountId): Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/${accountId}`);
  }
  public deleteAccount(id): Observable<Account>{
    return this.http.delete<Account>(`${this.baseUrl}/${id}`);
  }
  public addAccount(account): Observable<Account>{
    return this.http.post<Account>(this.baseUrl, account);
  }
  public getAccountEdit(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  public editAccount(account): Observable<Account>{
    return this.http.put<Account>(`${this.baseUrl}/${account.accountId}`,account)
    }

    public login( formData: FormData )
    {

        return this.http.post( `${localStorage.getItem( 'ServerUrl' )}/Auth`, formData );
        //return this.http.get( `http://localhost:1601/Auth?username=admin&password=e10adc3949ba59abbe56e057f20f883e`);

    }
}

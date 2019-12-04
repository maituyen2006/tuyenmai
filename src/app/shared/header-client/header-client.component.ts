import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';
import { ResponseApi } from 'app/class/response-api';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'app/class/category';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {
  admin;
  products=[];
  dataSource = new MatTableDataSource<Category>();
  constructor(private router: Router, private categoryService : CategoryService) { }

  ngOnInit() {
    this.loadScript();
    this.loadScript1();
    this.loadScript2();
    this.admin = JSON.parse(localStorage.CURRENT_ACCOUNT || null);
    this.products = JSON.parse(localStorage.getItem('dataProduct'));
    this.loadCategory();
  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/googletranslate.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
public loadScript1() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../../assets/js/removelogo.js';
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript2() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../../assets/js/main.js';
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
logout() {
  localStorage.removeItem('CURRENT_ACCOUNT');
  window.location.reload();
}
loadCategory(){
  this.categoryService.paging().subscribe((res: ResponseApi)=>{
    this.dataSource.data=res.data;
    // console.log(this.dataSource.data);
  });
}

}

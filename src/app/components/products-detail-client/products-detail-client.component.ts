import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from 'app/class/products';
import { ProductService } from 'app/service/product.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-products-detail-client',
  templateUrl: './products-detail-client.component.html',
  styleUrls: ['./products-detail-client.component.scss']
})
export class ProductsDetailClientComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  products: Products[] = [];
  productt: Products = new Products();
  dataSource = new MatTableDataSource <Products>();
  panelOpenState = false;
  constructor(private productsService : ProductService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.loadScript();
    this.loadScript1();
    this.loadScript2();
    // this.loadScript3();
    this.getproductDetail();
  }
  // paging(){
  //   this.productsService.paging1().subscribe(data => {
  //     this.products = data;
  //     this.dataSource.data=data;
    
  //   });
  // }
  getproductDetail(){
    this.routes.params.subscribe(params => {
       const { id } = params;
       this.productsService.productDetail(id).subscribe((res: ResponseApi)=>{
          this.dataSource.data=res.data;
          console.log(res.data)
       });
    })
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/vendor/slick/slick.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
public loadScript1() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../../assets/vendor/select2/select2.js';
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
// public loadScript3() {
//   let body = <HTMLDivElement> document.body;
//   let script = document.createElement('script');
//   script.innerHTML = '';
//   script.src = '../../../assets/js/slick-custom.js';
//   script.async = true;
//   script.defer = true;
//   body.appendChild(script);
// }
}

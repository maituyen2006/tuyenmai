import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from 'app/class/products';
import { ProductService } from 'app/service/product.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'app/class/response-api';
import { Comment } from 'app/class/comment';
import { CommentService } from 'app/service/comment.service';

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
  dataSource1 = new MatTableDataSource <Comment>();
  panelOpenState = false;
  constructor(private commentService: CommentService,private productsService : ProductService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.paging();
    this.loadScript();
    this.loadScript1();
    this.loadScript2();
   
    this.getproductDetail();
  }
  paging(){
    this.commentService.paging().subscribe((res : ResponseApi) => {
            this.dataSource.data=res.data;
    
    });
  }
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

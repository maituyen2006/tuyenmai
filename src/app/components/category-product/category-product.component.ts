import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { CartService } from 'app/service/cart.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Products } from 'app/class/products';
import { Category } from 'app/class/category';
import { ResponseApi } from 'app/class/response-api';
import { CategoryService } from 'app/service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  productss:  Products[] = [];
  productCart: Products[] = [];
  categorys: Category[]=[];
  // @Input() product: Category;
  dataSource = new MatTableDataSource <Category>();
  dataSource1 = new MatTableDataSource <Products>();
  constructor(private productService : ProductService, private cartService : CartService, private categoryService : CategoryService,private routes: ActivatedRoute) { }

  ngOnInit() {
    this.paging();
    this.loadScript();
    this.loadScript1();
  }
  paging(){
    this.routes.params.subscribe(params => {
      const { id } = params;
      this.categoryService.pagingCategoryProduct(id).subscribe((res: ResponseApi)=>{
         this.categorys=res.data;
         this.productss=res.data;
         console.log(res.data)
      });
   })
  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/vendor/select2/select2.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
public loadScript1() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../../assets/js/main.js';
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
formatLabel(value: number) {
  if (value >= 100000) {
    return Math.round(value / 10000) + 'k';
  }

  return value;
}
onAddToCart(productCart){
  this.cartService.addProductToCart(productCart);
  // localStorage.setItem('productCart',productCart);
  // localStorage.getItem('productCart')
  // console.log(productCart);

}

}

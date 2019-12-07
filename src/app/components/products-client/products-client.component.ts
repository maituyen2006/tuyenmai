import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Products } from 'app/class/products';
import { ProductService } from 'app/service/product.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ResponseApi } from 'app/class/response-api';
import { CartService } from 'app/service/cart.service';
import { ConvertPipe } from 'app/pipe/convert.pipe';
import { CategoryService } from 'app/service/category.service';
import { Category } from 'app/class/category';
@Component({
  selector: 'app-products-client',
  templateUrl: './products-client.component.html',
  styleUrls: ['./products-client.component.scss'],
  
})
export class ProductsClientComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  products: Products[] = [];
  productCart: Products[] = [];
  @Input() product: Products
  tempDataSource = [];
  tempDataSource1 = [];
  tempDataSource2 = [];
  dataColor : String;
  dataCategory : String;
  dataSource = new MatTableDataSource<Products>();
  dataSource1 = new MatTableDataSource<Category>();
  constructor( private productsService : ProductService, private cartService : CartService, private categoryService: CategoryService) { }

  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.filterPredicate = 
      (data, filterValue: string) => !filterValue ||
    (data.name && data.name.toLowerCase().indexOf(filterValue) !== -1);
    this.paging();
    this.loadScript();
    this.loadScript1();
    this.loadCategory();
  }
  paging(){
    this.productsService.pagingActive().subscribe((res: ResponseApi) => {
      this.tempDataSource = res.data;
      this.tempDataSource1 = res.data;
      this.tempDataSource2 = res.data;
      this.dataSource.data = res.data;
      // console.log(this.dataSource.data)
    });
  }
  loadCategory(){
    this.categoryService.paging().subscribe((res: ResponseApi)=>{
      this.dataSource1.data=res.data;
      // console.log(this.dataSource1.data);
    });
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //    this.dataSource.paginator.firstPage();
    // }
    this.dataSource.data = this.tempDataSource.filter(value => {
      return value.name.toLowerCase().includes(filterValue);
    });
  }

  paginationFrom() {
    return ((this.paginator.pageIndex === 0) ? this.paginator.pageIndex : (this.paginator.pageIndex) * this.paginator.pageSize );
  }

  paginationTo() {
    return this.paginationFrom() + this.paginator.pageSize;
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
onSearch(formSearch){
  // const filter=this.dataSource.data.filter(str=>{
  //   return str.includes("formSearch.value.name");
  // })
}
onColor(event){
  
  this.dataColor=event.value;
  this.dataSource.data = this.tempDataSource1.filter(colors => {
    return colors.color.includes(this.dataColor);
    
  });
}
onCategory(event){
  this.dataCategory=event.value;
 this.dataSource.data= this.tempDataSource2.filter(data11 => {
  return data11.categoryId.categoryId.includes(this.dataCategory)
    
  });
}


}

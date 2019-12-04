import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductInsertComponent } from 'app/dialog/product-insert/product-insert.component';
import {  MatDialog, MatTableDataSource, MatPaginator,MatSort, MatSnackBar} from '@angular/material';
import { ProductService } from 'app/service/product.service';
import { Products } from 'app/class/products';
import { ResponseApi } from 'app/class/response-api';
import { ProductEditComponent } from 'app/dialog/product-edit/product-edit.component';
import { Category } from 'app/class/category';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['name','size','origin','price','categoryId','description','color','shopStatus','warehouseStatus','productStatus','itemOnEquipment','itemInStock','Action'];
  // category: Category[] = [];
 
  dataSource = new MatTableDataSource <Products>();
  dataSource1 = new MatTableDataSource <Category>();
  constructor(private productService : ProductService,private categoryService : CategoryService,private snackBar: MatSnackBar,private dialog: MatDialog) { }


  ngOnInit() {
    
    this.paging();
    // this.paging1();
    
  
  }
  public paging(){
    this.dataSource.paginator = this.paginator;   
     this.dataSource.sortingDataAccessor = (item: any, property) => {
        switch (property) {
          case 'categoryId': {
            return item.categoryId ? item.categoryId.name : item.productId;
          }
          default: return item[property];


          
        }
      };    
      this.dataSource.sort = this.sort; 
    this.productService.paging().subscribe((res: ResponseApi) => {
      this.dataSource.data = res.data;
      console.log(this.dataSource.data)
    });
  }
  public paging1(){
    this.categoryService.paging().subscribe((res1: ResponseApi) => {
      this.dataSource1.data = res1.data;
      

      
 
      
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.dataSource1.filter = filterValue;
  }
  insert() {
    this.dialog.open(ProductInsertComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this }
    });
  }
 public delete(productId:String){
    
    
if(confirm('Bạn chọn xóa sản phẩm này. Bạn muốn tiếp tục ?')){
  this.productService.delete(productId).subscribe((res: ResponseApi) => {
    
    this.paging();
      this.snackBar.open('Xóa thành công', 'Close', {
                duration: 2500
      });
    
});
}
  }
  public edit(product){
    this.dialog.open(ProductEditComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this, product: product }
    });
  }
  
}

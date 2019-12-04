import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Category } from 'app/class/category';
import { CategoryService } from 'app/service/category.service';
import { CategoryInsertComponent } from 'app/dialog/category-insert/category-insert.component';
import { CategoryEditComponent } from 'app/dialog/category-edit/category-edit.component';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['categoryId','createdBy','name','active','Action'];
  dataSource = new MatTableDataSource <Category>();
  constructor(private categoryService : CategoryService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.paging();
  }
  public paging(){
    this.categoryService.paging().subscribe((res : ResponseApi) => {      
      // this.products = data;
      // this.dataSource=new MatTableDataSource(data);
      this.dataSource.data=res.data;
      // console.log(data);
      this.dataSource.paginator = this.paginator;      
      this.dataSource.sort = this.sort;
      
      
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public delete(categoryId:Number){
    
    
    // if(confirm('Bạn chọn xóa danh mục này. Bạn muốn tiếp tục ?')){
    //   this.categoryService.editProduct(categoryId).subscribe(data => {
    //     // this.productss = this.products.filter(item => item.productId !== data.productId);
    //     this.paging();
    
    //       this.snackBar.open('Xóa thành công', 'Close', {
            
    //         duration: 2500
    //       });
        
    // });
    // }
      }
  insert(){
    this.dialog.open(CategoryInsertComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this }
    });
  }
  public edit(category){
    this.dialog.open(CategoryEditComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this, category: category }
    });
  }
}

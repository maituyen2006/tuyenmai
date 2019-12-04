import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Products } from 'app/class/products';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'app/service/product.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductsComponent } from 'app/pages/products/products.component';
import { Location } from '@angular/common';
import { Category } from 'app/class/category';
import { ResponseApi } from 'app/class/response-api';
import { CategoryService } from 'app/service/category.service';
@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit {
product :Products = new Products();
category :Category = new Category();
dataSource = new MatTableDataSource <Products>();
dataSource1 = new MatTableDataSource <Category>();
// categoryId : Category[]=[];
// account: Account = new Account();

  constructor(private productService : ProductService, private categoryService : CategoryService, private router: Router,public dialogRef: MatDialogRef<ProductInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    
    this.pagingCategory();
  }
  // public paging(){
  //   this.productService.paging().subscribe((res: ResponseApi) => {
  //     this.dataSource.data = res.data;
      
  //     console.log(this.dataSource.data);
 
 
      
  //   });
  // }
  public pagingCategory(){
    this.categoryService.paging().subscribe((res1: ResponseApi) => {
      this.dataSource1.data = res1.data;
      // console.log(this.dataSource1.data);
 
 
      
    });
  }
  onAdd(formAdd){
    this.productService
    .insert(formAdd.value)
    .subscribe((res2: ResponseApi) => {
      const parent = this.dataDialog.parent;
      this.dialogRef.close();
      // console.log(res2.data);
      if (res2.success) {
        this.snackBar.open(res2.message, "Đóng", {
          panelClass: ["style-success"],
          duration: 2500
          
        });
      } else {
        this.snackBar.open(res2.message, "Đóng", {
          panelClass: ["style-error"],
          duration: 2500
        });
      }
      parent.paging();
    });
    // this.productService.insert(JSON.stringify(formAdd.value)).subscribe(data=>{
    //   this.dialogRef.close();
    // });
    // if(formAdd.valid){
    //     this.productService.addProduct(formAdd.value).subscribe(data=>{
    //       this.dialogRef.close('Thêm thành công');
    //       this.router.navigateByUrl('/products-manage');
          
    //     });
    // }
  }
  // refresh(): void{
  //   this.router.navigateByUrl("/products-manage",{skipLocationChange:true});
  // }

  // prevStep() {
  //   // this.prevStep--;
  // }
}

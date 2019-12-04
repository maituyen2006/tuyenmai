import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSnackBar
} from "@angular/material";
import { Products } from "app/class/products";
import { ProductService } from "app/service/product.service";
import { ResponseApi } from "app/class/response-api";
import { Category } from "app/class/category";
import { CategoryService } from "app/service/category.service";
import { ProductsComponent } from "app/pages/products/products.component";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  id: String;
  product: Products = new Products();
  category: Category = new Category();
  dataSource1 = new MatTableDataSource<Category>();

  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private productService: ProductService,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.product = this.dataDialog.product;
    
    this.pagingCategory();
  }
  public pagingCategory() {
    this.categoryService.paging().subscribe((res1: ResponseApi) => {
      this.dataSource1.data = res1.data;
      // console.log(this.dataSource1.data);
    });
  }

  onEdit(formEdit) {
    // console.log(this.product);
    //   this.productService.putProductedit(formEdit.value).subscribe((res2: ResponseApi) =>{

    //   });

    this.productService
      .edit(this.product)
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
  }
}

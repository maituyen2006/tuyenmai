import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'app/class/category';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CategoryService } from 'app/service/category.service';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  id:Number;
  category: Category = new Category();
  constructor(public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any, private categoryService : CategoryService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.category = this.dataDialog.category;
  }
  onEdit(formEdit) {
    this.categoryService
      .edit(this.category)
      .subscribe((res: ResponseApi) => {
        const parent = this.dataDialog.parent;
        this.dialogRef.close();
        console.log(res.data);
        if (res.success) {
          this.snackBar.open(res.message, "Đóng", {
            panelClass: ["style-success"],
            duration: 2500
            
          });
        } else {
          this.snackBar.open(res.message, "Đóng", {
            panelClass: ["style-error"],
            duration: 2500
          });
        }
        parent.paging();
      });
  }

}

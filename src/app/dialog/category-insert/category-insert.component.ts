import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'app/class/category';
import { CategoryService } from 'app/service/category.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.scss']
})
export class CategoryInsertComponent implements OnInit {
  category :Category = new Category();
  constructor(private categoryService : CategoryService, private router: Router,public dialogRef: MatDialogRef<CategoryInsertComponent>,  @Inject(MAT_DIALOG_DATA) public dataDialog: any,private snackBar: MatSnackBar ) { }

  ngOnInit() {
  }
  onAdd(formAdd){
    
    this.categoryService
    .insert(formAdd.value)
    .subscribe((res: ResponseApi) => {
      const parent = this.dataDialog.parent;
      console.log(res.data);
      this.dialogRef.close();
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

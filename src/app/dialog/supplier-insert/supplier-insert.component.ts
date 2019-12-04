import { Component, OnInit, Inject } from '@angular/core';
import { Supplier } from 'app/class/supplier';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SupplierService } from 'app/service/supplier.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-supplier-insert',
  templateUrl: './supplier-insert.component.html',
  styleUrls: ['./supplier-insert.component.scss']
})
export class SupplierInsertComponent implements OnInit {
  supplier : Supplier = new Supplier();
  dataSource = new MatTableDataSource <Supplier>();
  constructor(private supplierService : SupplierService, private router: Router, public dialogRef: MatDialogRef<SupplierInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any, private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }
  onAdd(formAdd){
    this.supplierService
    .insert(formAdd.value)
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

import { Component, OnInit, Inject } from '@angular/core';
import { Supplier } from 'app/class/supplier';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SupplierService } from 'app/service/supplier.service';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {
  supplier : Supplier = new Supplier();
  constructor(public dialogRef: MatDialogRef<SupplierEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any, private supplierService : SupplierService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.supplier = this.dataDialog.supplier;
  }
  onEdit(formEdit) {
    this.supplierService
      .edit(this.supplier)
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

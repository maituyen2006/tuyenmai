import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from 'app/service/category.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Account } from 'app/class/account';
import { ResponseApi } from 'app/class/response-api';
import { AccountService } from 'app/service/account.service';

@Component({
  selector: 'app-account-insert',
  templateUrl: './account-insert.component.html',
  styleUrls: ['./account-insert.component.scss']
})
export class AccountInsertComponent implements OnInit {
  account :Account = new Account();
  constructor(private accountService : AccountService, private router: Router,public dialogRef: MatDialogRef<AccountInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onAdd(formAdd){
    this.accountService
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

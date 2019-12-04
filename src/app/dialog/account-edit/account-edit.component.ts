import { Component, OnInit, Inject } from '@angular/core';
import { Account } from 'app/class/account';
import { AccountService } from 'app/service/account.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {
  account :Account = new Account();
  constructor(private accountService : AccountService, private router: Router,public dialogRef: MatDialogRef<AccountEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.account = this.dataDialog.account;
  }
  onEdit(formEdit){
    this.accountService
    .edit(this.account)
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


import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Account } from 'app/class/account';
import { AccountService } from 'app/service/account.service';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  id: String;

  account: Account = new Account();

  dataSource = new MatTableDataSource<Account>();

  constructor(public dialogRef: MatDialogRef<AccountDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: Account, private accountService: AccountService) { }

  ngOnInit() {
    this.getAccountEdit();
  }
  getAccountEdit() {
    this.accountService.getAccountEdit(this.dataDialog.accountId).subscribe((res: ResponseApi) => {
      this.account = res.data;    
      
    });

  }

}

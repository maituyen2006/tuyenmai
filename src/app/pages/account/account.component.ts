import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Account } from 'app/class/account';
import { AccountService } from 'app/service/account.service';
import { ResponseApi } from 'app/class/response-api';
import { AccountDetailComponent } from 'app/dialog/account-detail/account-detail.component';
import { AccountInsertComponent } from 'app/dialog/account-insert/account-insert.component';
import { AccountEditComponent } from 'app/dialog/account-edit/account-edit.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['username','password','role','Active','Deleted','Action'];
  dataSource = new MatTableDataSource <Account>();
  constructor(private accountService : AccountService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
    this.paging();
  }
  public paging(){
    this.accountService.paging().subscribe((res: ResponseApi) => {
      
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
  insert() {
    this.dialog.open(AccountInsertComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this }
    });
  }
 public delete(accountId){
    
    
if(confirm('Bạn chọn xóa tài khoản này. Bạn muốn tiếp tục ?')){
  this.accountService.delete(accountId).subscribe(data => {
    // this.productss = this.products.filter(item => item.productId !== data.productId);
    this.paging();
      this.snackBar.open('Xóa thành công', 'Close', {
                duration: 2500
      });
    
});
}
  }
  public edit(account){
    this.dialog.open(AccountEditComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this, account: account }
    });
  }
  public detail(accountId:Number){
    this.dialog.open(AccountDetailComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { accountId }
    });
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesoderDetailComponent } from 'app/dialog/salesoder-detail/salesoder-detail.component';
import { ResponseApi } from 'app/class/response-api';
import { SelasoderService } from 'app/service/selasoder.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Salesoder } from 'app/class/salesoder';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['orderId','createdBy','createdOn','fullName','Action'];
  dataSource = new MatTableDataSource <Salesoder>();
  orderId:Salesoder[]=[];
  constructor(private saleOrderService : SelasoderService,private snackBar: MatSnackBar,private dialog: MatDialog) { }


  // account:Account;
  // firstName:String;
  // lastName:String;
  // fullName:String;


  public paging(){
    this.saleOrderService.paging().subscribe((res:ResponseApi) => {
      // this.account=
      // this.firstName=JSON.stringify(this.account.firstName);
      // this.lastName=JSON.stringify(this.account.lastName);
      // this.fullName=`${this.firstName}${this.lastName}`;
      this.dataSource.data=res.data;
      // console.log(this.fullName);
      // console.log(this.dataSource.data.accountId.name);
    })
  }

  ngOnInit() {
    this.paging();
    // this.paging();
  // }
  // public paging(){
  //   // this.selasoderService.paging1().subscribe(data => {
  //   //   // this.products = data;
  //   //   // this.dataSource=new MatTableDataSource(data);
  //   //   this.dataSource.data=data;
  //   //   // console.log(data);
  //   //   this.dataSource.paginator = this.paginator;
  //   //   this.dataSource.sort = this.sort;


  //   });
  // }
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
  // public delete(categoryId:Number){


  //   if(confirm('Bạn chọn xóa danh mục này. Bạn muốn tiếp tục ?')){
  //     this.supplierService.editProduct(categoryId).subscribe(data => {
  //       // this.productss = this.products.filter(item => item.productId !== data.productId);
  //       this.paging();

  //         this.snackBar.open('Xóa thành công', 'Close', {

  //           duration: 2500
  //         });

  //   });
  //   }
      }
      public detail(orderId:Number){
        this.dialog.open(SalesoderDetailComponent, {
          width: '60%',
          maxHeight: '90vh',
          data: { orderId }         
        });
        
      }

    }
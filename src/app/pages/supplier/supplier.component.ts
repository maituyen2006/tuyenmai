import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Supplier } from 'app/class/supplier';
import { SupplierService } from 'app/service/supplier.service';
import { ResponseApi } from 'app/class/response-api';
import { SupplierInsertComponent } from 'app/dialog/supplier-insert/supplier-insert.component';
import { SupplierEditComponent } from 'app/dialog/supplier-edit/supplier-edit.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['createdBy','createdOn','Company',
  'Address1','City','Telephone1','FirstName','LastName','Email1',
  'blackList','BlockReason','Action'];
  dataSource = new MatTableDataSource <Supplier>();
  constructor(private supplierService : SupplierService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
    this.paging();
    this.dataSource.paginator = this.paginator;    
  }
  public paging(){
    this.supplierService.paging().subscribe((res: ResponseApi) => {      
      // this.products = data;
      // this.dataSource=new MatTableDataSource(data);
      this.dataSource.data=res.data;
      console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;      
      this.dataSource.sort = this.sort;
      
      
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public delete(categoryId:Number){
    
    
    if(confirm('Bạn chọn xóa danh mục này. Bạn muốn tiếp tục ?')){
      this.supplierService.editProduct(categoryId).subscribe(data => {
        // this.productss = this.products.filter(item => item.productId !== data.productId);
        this.paging();
    
          this.snackBar.open('Xóa thành công', 'Close', {
            
            duration: 2500
          });
        
    });
    } 
      }
  insert(){
    this.dialog.open(SupplierInsertComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this }
    });
  }
  edit(supplier){
    this.dialog.open(SupplierEditComponent, {
      width: '60%',
      maxHeight: '90vh',
      data: { parent: this, supplier:supplier  }
    });
  }
}

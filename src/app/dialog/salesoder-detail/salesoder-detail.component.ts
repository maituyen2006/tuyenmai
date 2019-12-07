import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Salesoder } from 'app/class/salesoder';
import { SelasoderService } from 'app/service/selasoder.service';
import { ResponseApi } from 'app/class/response-api';

@Component({
  selector: 'app-salesoder-detail',
  templateUrl: './salesoder-detail.component.html',
  styleUrls: ['./salesoder-detail.component.scss']
})
export class SalesoderDetailComponent implements OnInit {
  

  salesoder: Salesoder = new Salesoder();

  dataSource = new MatTableDataSource<Salesoder>();

  constructor(public dialogRef: MatDialogRef<SalesoderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: Salesoder, private selasoderService: SelasoderService) { }

  ngOnInit() {
    this.getSalesoderEdit(); 
  }
  getSalesoderEdit() {
    this.selasoderService.getsalesoderEdit(this.dataDialog.orderId).subscribe((res: ResponseApi) => {
      this.salesoder = res.data;    
      console.log(res.data) 
    });

  }
}

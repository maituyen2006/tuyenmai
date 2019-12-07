import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-statistics',
  templateUrl: './product-statistics.component.html',
  styleUrls: ['./product-statistics.component.scss']
})
export class ProductStatisticsComponent implements OnInit {
  displayedColumns: string[] = ['product','entryPrice','price','category','itemOnEquipment','itemInStock','productStatus'];

  constructor(private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
  }

}

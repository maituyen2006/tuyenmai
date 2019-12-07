import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-revenue-statistics',
  templateUrl: './revenue-statistics.component.html',
  styleUrls: ['./revenue-statistics.component.scss']
})
export class RevenueStatisticsComponent implements OnInit {

  displayedColumns: string[] = ['date','orderId','itemsQuantity','itemsTotalPrice'];

  constructor(private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
  }

}

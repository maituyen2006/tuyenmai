import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  displayedColumns: string[] = ['categoryId','createdBy','name','active','Action'];
  constructor(private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
  } 

}

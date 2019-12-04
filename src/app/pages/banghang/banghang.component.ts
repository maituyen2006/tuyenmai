
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-banghang',
  templateUrl: './banghang.component.html',
  styleUrls: ['./banghang.component.scss']
})
export class BanghangComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'price', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  price: string;
  total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', price:'500', total: '500' },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',price:'500', total: '500'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',price:'500', total: '500'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',price:'500', total: '500'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',price:'500', total: '500'}, 
];

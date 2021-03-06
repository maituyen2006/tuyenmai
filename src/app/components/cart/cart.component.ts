import { Component, OnInit } from '@angular/core';
import { Products } from 'app/class/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'app/service/cart.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
product : Products =new Products();
products=[];
total:any;
productss:any;
dataSource = new MatTableDataSource <Products>();
  constructor(private route:ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('dataProduct'));
    this.total=this.products.map(totals=>totals.price).reduce((a,b)=>a+b,0);
    console.log(this.total)
  }
  removeProduct(product){
    // JSON.stringify(localStorage.removeItem('dataProduct'));
   
    // console.log(JSON.stringify(localStorage.removeItem('dataProduct')));

    const index = this.products.indexOf(product);
    // this.products.splice(index,1);
    if (index !== -1) {
      
      this.products.splice(index,1);
      localStorage.setItem('dataProduct',JSON.stringify(this.products));
  }
}

getSubtotal(){
  this.productss.map(product => product.quantity * product.price).reduce((prev, next) => prev + next);
  console.log(this.productss);
}

  // delete(kcsTicketDetail) {
  //   const index = this.dataSource.indexOf(kcsTicketDetail);
  //   if (index !== -1) {
  //     this.dataSource.splice(index, 1);
  //     this.dataSource = [...this.dataSource];
  //   }
  // }
}

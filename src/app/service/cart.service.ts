import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Products } from 'app/class/products';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [];
  data:Products =new Products();
  constructor() { }



  addProductToCart(product){
    product.quantity = 1;
    product.total = 0;
    this.data = product;
    
    if(localStorage.getItem('dataProduct')){
      this.products = JSON.parse(localStorage.getItem('dataProduct'));
      const check =this.products.find(value => value.productId === product.productId);
      const total=this.products.map(totals=>totals.price).reduce((a,b)=>a+b,0);
      
      if(check){
        //nếu trùng, tăng số lượng, cộng giá tiền hiện tại với product.giá tiền
        check.quantity += 1;
        check.price += product.price;
        console.log(this.products);
      } else {
      this.products.push(this.data);
      }
      
      // let total=this.products.map(totals=>totals.price).reduce((a,b)=>a+b,0);

      localStorage.setItem('dataProduct',JSON.stringify(this.products));
    }else{
      this.products.push(this.data);
      localStorage.setItem('dataProduct',JSON.stringify(this.products));
    }
    // console.log(this.data);
  }


}

import { Products } from './products';
import { Supplier } from './supplier';

export class PurchasesOrder {
    OrderId : number ;
    CreatedBy : String ;
    CreatedOn : Date;
    Name : String ;
    SupplierId : Supplier
    TotalPrice : number;
    Description : String ;
    OrderStatus : String ;
    ProductId : Products;
    Quantity : number ;
    
     
}

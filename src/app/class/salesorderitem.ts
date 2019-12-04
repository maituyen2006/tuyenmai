import { Salesoder } from './salesoder';
import { Products } from './products';

export class Salesorderitem {
    itemId: String;
    itemQuantity: String;
    itemName: String;
    size: String;
    color: String;
    productId: Products;
    orderId: Salesoder;
}

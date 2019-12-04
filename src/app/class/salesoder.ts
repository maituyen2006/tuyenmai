import {Account} from "./account";

export class Salesoder {
   orderId:String;
   createdBy:String;
   createdOn:Date;
   itemsQuantity:Number;
   itemsTotalPrice:Number;
   description:String;
   size:String;
   material:String;
   accountId: Account;
}

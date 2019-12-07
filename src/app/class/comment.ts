import { Account } from './account';
import { Products } from './products';

export class Comment {
    commentId: String;
    createOn: Date;    
    account: Account;
    product: Products;
    comment: String;
}

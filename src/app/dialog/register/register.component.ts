import { Component, OnInit } from '@angular/core';
import { Account } from 'app/class/account';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'app/service/account.service';
import { ResponseApi } from 'app/class/response-api';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  account :Account = new Account();
  constructor(private accountService: AccountService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }
  onAdd(formAdd){
    console.log(formAdd.value);
    this.accountService
    .insertMember(formAdd.value)
    .subscribe((res: ResponseApi) => {

      console.log(res);
      
    });
  
  }
}

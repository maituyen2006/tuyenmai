import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { CommentService } from 'app/service/comment.service';
import { ResponseApi } from 'app/class/response-api';
import { Comment } from 'app/class/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  displayedColumns: string[] = ['commentId','createOn','account','product','comment','Action'];
  dataSource = new MatTableDataSource <Comment>();
  constructor(private commentService: CommentService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() {
    this.paging();
  }
  paging(){
    this.commentService.paging().subscribe((res : ResponseApi) => {     
      this.dataSource.data = res.data;
      console.log(this.dataSource.data)
    });
  }

}

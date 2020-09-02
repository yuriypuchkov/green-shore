import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-guest-book-author-info',
  templateUrl: './guest-book-author-info.component.html',
  styleUrls: ['./guest-book-author-info.component.css']
})
export class GuestBookAuthorInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GuestBookAuthorInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public author: User) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}

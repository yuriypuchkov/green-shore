import { Component, OnInit, Input, Inject } from '@angular/core';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-book-new-entry',
  templateUrl: './guest-book-new-entry.component.html',
  styleUrls: ['./guest-book-new-entry.component.css']
})
export class GuestBookNewEntryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GuestBookNewEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public entry: GuestBookEntry) {}

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('saving');
    console.log(this.entry);
    this.dialogRef.close(this.entry);
    console.log('saved');
  }

}

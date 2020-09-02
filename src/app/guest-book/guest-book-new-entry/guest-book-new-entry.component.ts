import { Component, OnInit, Input, Inject } from '@angular/core';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-book-new-entry',
  templateUrl: './guest-book-new-entry.component.html',
  styleUrls: ['./guest-book-new-entry.component.css']
})
export class GuestBookNewEntryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GuestBookNewEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public entry: GuestBookEntry) {}


  nameControl = new FormControl('', [Validators.required]);
  messageControl = new FormControl('', [Validators.required, Validators.minLength(20)]);

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.hasError()){
      this.dialogRef.close(this.entry);
    }
  }

  getNameErrorMessage() {
    return this.nameControl.hasError('required') ? 'You must enter name' : '';
  }

  getMessageErrorMessage() {

    if (this.messageControl.hasError('required')){
      console.log(this.messageControl.getError('required'));
      return  'You must enter message';
    }

    if (this.messageControl.hasError('minlength')){
      console.log(this.messageControl.getError('minlength'));
      return  'Message should contain at least 20 symbols';
    }
  }

  hasError(){
    return (this.nameControl.invalid || this.messageControl.invalid);
  }

}

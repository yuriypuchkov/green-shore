import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-guest-book-item',
  templateUrl: './guest-book-item.component.html',
  styleUrls: ['./guest-book-item.component.css']
})
export class GuestBookItemComponent implements OnInit {

  @Input() entry: GuestBookEntry;
  @Output() authorSelected = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  selectAuthor(){
    this.authorSelected.emit(this.entry.author);
  }
}

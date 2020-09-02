import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() isShortMode: boolean;
  @Input() userId: number;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe(user => {this.user = user; });
  }

}

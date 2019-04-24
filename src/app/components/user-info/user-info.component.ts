import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserInfo} from '../../interfaces/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: []
})
export class UserInfoComponent implements OnInit {

  constructor(private authService: AuthService) { }
  userInfo: UserInfo;

  ngOnInit() {
    this.authService.lggedInfo().subscribe((user) => { this.userInfo = user; console.log(this.userInfo);});
  }

}

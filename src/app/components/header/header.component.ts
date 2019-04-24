import {Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  localeStorageToken = localStorage.getItem('token') ? true : false;

  constructor(
    private localeStorageService: LocalStorageService,
  ) {}
  ngOnInit() {
    this.localeStorageService.token.subscribe(val => {
      this.localeStorageToken = val;
    });
  }
}

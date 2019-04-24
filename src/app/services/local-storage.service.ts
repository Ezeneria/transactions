import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  token = new Subject<boolean>();
  constructor() {
  }

  saveToken(token) {
    localStorage.setItem('token', token.id_token);
    this.token.next(true);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken(token) {
    localStorage.getItem(token);
    this.token.next(false);
  }
}

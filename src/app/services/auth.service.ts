import { UserInfo } from './../interfaces/user.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from '../services/local-storage.service';
import {map, tap} from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

const BASE_URL = 'http://193.124.114.46:3001';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getToken()}`
    })
  };

  createUser(body) {
    return this.http.post(`${BASE_URL}/users`, body);
  }

  logInUser(body) {
    return this.http.post(`${BASE_URL}/sessions/create`, body);
  }

  lggedInfo(): Observable<UserInfo> {
    return this.http.get(
      `${BASE_URL}/api/protected/user-info`,
      this.httpOptions
    ).pipe(map((val) => val['user_info_token']));
  }
}

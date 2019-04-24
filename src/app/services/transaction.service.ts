import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';

const BASE_URL = 'http://193.124.114.46:3001';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
obj = {k: 2};
  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getToken()}`
    })
  };

  transactionList() {
    return this.http.get(
      `${BASE_URL}/api/protected/transactions`,
       this.httpOptions
       );
  }
  createTransaction(body) {
    return this.http.post(
      `${BASE_URL}/api/protected/transactions`, body, this.httpOptions);
  }
}

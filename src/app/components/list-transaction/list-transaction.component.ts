import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent implements OnInit {

  constructor(private transactionsService: TransactionService) { }

  ngOnInit() {
    this.transactionsService.transactionList().subscribe(val => console.log(val));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private transactionsService: TransactionService,
    ) { }
    
  transactionForm = this.fb.group({
    name: ['', Validators.required],
    amount: ['', Validators.required]
  })

  makeTransaction(){
    this.transactionsService
      .createTransaction(this.transactionForm.value)
      .subscribe( val => console.log(val));
  }
  ngOnInit() { }

}

import { MatInputModule } from '@angular/material/input';
import { ListTransactionComponent } from './../../components/list-transaction/list-transaction.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionLayoutComponent } from '../../layouts/transaction-layout/transaction-layout.component';
import { TransactionFormComponent } from '../../components/transaction-form/transaction-form.component';
import { MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionLayoutComponent,
    ListTransactionComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TransactionsModule { }
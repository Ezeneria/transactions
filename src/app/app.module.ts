import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { TransactionLayoutComponent } from './layouts/transaction-layout/transaction-layout.component';
import { ListTransactionComponent } from './components/list-transaction/list-transaction.component';
import { TransactionsModule } from './modules/transactions/transactions.module';
 const appRoutes: Routes = [
   { path: '', component: TransactionsComponent},
   { path: 'user/:logged', component: AuthComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SnackBarComponent,
    HeaderComponent,
    UserInfoComponent,
    AuthNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    TransactionsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

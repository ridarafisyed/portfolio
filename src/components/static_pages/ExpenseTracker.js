import React from 'react';
import { Balance } from '../expense_tracker/Balance';
import { IncomeExpenses } from  '../expense_tracker/IncomeExpenses';
import { TransactionList } from '../expense_tracker/TransactionList';
import { AddTransaction } from '../expense_tracker/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import './ExpenseTracker.css';



export function ExpenseTracker() {
  return (
    <GlobalProvider>
      
      <div className="container_glass2">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );

}


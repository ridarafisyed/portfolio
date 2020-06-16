import React from 'react';
import { Balance } from './balance/Balance';
import { IncomeExpenses } from  './incomeExpense/IncomeExpenses';
import { TransactionList } from './transactionList/TransactionList';
import { AddTransaction } from './addTrasaction/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
import {Footer} from '../static_pages/Footer'

import './ExpenseTracker.css';

export function ExpenseTracker() {
  return (
    
    <GlobalProvider>
      <Container fluid>      
        <h1 className="text-center">ExpenseTracker</h1>
        
      <Container  fluid className="bg-text">
        <Row>
          <Col>
            <Balance />
          </Col>
        </Row>
        <Row>
          <Col>
            <IncomeExpenses />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <AddTransaction />
          </Col>
          <Col sm={9}>
          <TransactionList />
          </Col>
        </Row> 
      </Container>
      </Container>
      <div className='fixed-bottom'>
        <Footer/>
      </div>
    </GlobalProvider>
  );

}


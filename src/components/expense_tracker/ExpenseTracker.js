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
      <Container className='bg-header-text' style={{width:"80%"}} >
      <div className='jumbotron bg-header-text text-center'>
            <Container  sm={4}>
            <h1><i className="fas fa-calculator w3-text-green"> </i>  Expense Tracker</h1>
            </Container>
      </div>
      </Container>
      <Container fluid className=' bg-header-text'  style={{width:"80%"}} >
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
      
      <div className='fixed-bottom'>
        <Footer/>
      </div>
    </GlobalProvider>
  );

}


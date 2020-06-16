import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (

    <Row className="text-center">
      <Col sm={6}>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </Col>
      <Col sm={6}>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </Col>
    </Row>
  )
}

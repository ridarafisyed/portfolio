import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Form, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

 
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <Row>
      <Col>
      <h4>Add transaction</h4>
      <hr/>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicText">
        
          <Form.Control ype="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Item..."  />
        </Form.Group>
        <h6 className="text-muted">Amount ( '-' : expense, '+' : income)</h6>
        <Form.Group controlId="formBasicText">
          <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."  />
        </Form.Group>
              
        <Button  variant="primary" type="submit">
          Add 
        </Button>
      </Form>
      </Col>
    </Row>
  )
}

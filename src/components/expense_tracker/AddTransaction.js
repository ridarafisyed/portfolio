import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Form, Button, size } from 'react-bootstrap';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(true);

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
    <>
      <h3>Add new transaction</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name of</Form.Label>
          <Form.Control ype="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."  />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='form_text'>Amount</Form.Label>
          <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."  />
        </Form.Group>
        
        <Button size= 'lg'variant="primary" type="submit">
          Submit
        </Button>{' '}
      </Form>
      
    </>
  )
}
{/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="radio"
          label="Expense"
          value = {true}
          onChange={(e) => setType(e.target.value)}
          name='expense'
          id="inline-${type}-3`"
        />
        <Form.Check
          type="radio"
          value = {false}
          label="Income"
          onChange={(e) => setType(e.target.value)}
          name="expense"
          id="inline-`"
        />
        </Form.Group> */}
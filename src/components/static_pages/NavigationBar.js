import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



export const NavigationBar = () => (
 <div className='sticky_navbar'>
   <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href="/">Rida Rafi Syed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          
          <Nav.Item><Nav.Link href="/expense">Expense Tracker</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/covid19">Covid19 Trend</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contect</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
)

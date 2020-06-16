import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



export const NavigationBar = () => (
 <div className='sticky_navbar'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Rida Rafi Syed</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/expense">Expense Tracker</Nav.Link>
          <Nav.Link href="/covid19">Covid19 Trend</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>

    
)

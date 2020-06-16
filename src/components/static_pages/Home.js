import React from 'react';

import { Footer} from './Footer';

import { Container} from 'react-bootstrap';

import '../../General.css';



export const Home = () => (  
  <Container>
    <div className="bg-header-text text-center" style={{margin:"10%",width:'80%'}}>
        <h1 className="bg-header-text">Stay Home! Stay Safe</h1><br/>
        <a type="button" className="btn btn-danger btn-lg" href='/covid19'>
            <i className='fas fa-chart-line'> </i> COVID-19 Trend </a>
          <br/><br/>
        <a type="button" className="btn btn-success btn-lg" href='/expense'> 
          <i className='fas fa-calculator'> </i> Expense Tracker</a>
      </div> 
      <div className=" fixed-bottom"> 
        <Footer/>
      </div>
    </Container>
)


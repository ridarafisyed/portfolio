import React from 'react';

import { Footer} from './Footer';

import { Container} from 'react-bootstrap';

import './StaticPage.css'
import './General.css'



export const Home = () => (  
  <Container>
    <div className="bg-text" style={{width:'40%'}}>
        <h1 className="">Stay Home! Stay Safe</h1>
        <a type="button" className="btn btn-danger btn-block" href='/covid19'>
            <i className='fas fa-chart-line'> </i> COVID-19 Trend </a>
          <br/>
        <a type="button" className="btn btn-success btn-block" href='/expense'> 
          <i className='fas fa-calculator'> </i> Expense Tracker</a>
      </div> 
      <div className=" fixed-bottom"> 
        <Footer/>
      </div>
    </Container>
)


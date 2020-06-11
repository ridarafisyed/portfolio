import React from 'react';


import './StaticPage.css'
import './General.css'


export const Home = (props) => (
  
  <div className='container_glass '>
    <h1 className="display-3">Stay Home Stay Save</h1>
     <a type="button" className="btn btn-danger btn-lg" href='/covid19'><i className='fa fa-heartbeat'></i> COVID-19 Trend </a>
     <span>  </span>
    <a type="button" className="btn btn-success btn-lg" href='/expense'> <i className='fas fa-calculator'></i> Expense Tracker</a>
  </div>
)
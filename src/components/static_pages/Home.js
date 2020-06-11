import React from 'react';

//import styled from 'styled-components';
import './StaticPage.css'
import './General.css'
// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   margin-top: 1em;
//   margin-left: 6em;
//   margin-right: 6em;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: minmax(25px, auto);
// `;

export const Home = (props) => (
  
  <div className='container_glass '>
    <h1 className="display-3">Welcome</h1>
     <button type="button" className="btn btn-danger btn-lg" href='/covid19'><i className='fa fa-heartbeat'></i> COVID-19 Trend </button>
     <span>  </span>
    <button type="button" className="btn btn-success btn-lg" href='/expense'> <i className='fas fa-calculator'></i> Expense Tracker</button>
  </div>
)
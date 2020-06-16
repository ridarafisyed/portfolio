import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/static_pages/NavigationBar';

import { Home } from './components/static_pages/Home';
import { NoMatch } from './components/static_pages/NoMatch';
import {ExpenseTracker} from './components/expense_tracker/ExpenseTracker';
import  Covid19  from './components/covid-trend'


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/expense" component={ExpenseTracker} />
          <Route path="/covid19" component={Covid19} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </Router>
      
    </React.Fragment>
    
  );
}

export default App;

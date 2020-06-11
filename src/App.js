import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/static_pages/NavigationBar';
import { Home } from './components/static_pages/Home';
import { Contact } from './components/static_pages/Contact';
import { NoMatch } from './components/static_pages/NoMatch';
import {ExpenseTracker} from './components/static_pages/ExpenseTracker';
import { Covid19 } from './components/static_pages/Covid19';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
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

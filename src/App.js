import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/static_pages/NavigationBar';
import { Home } from './components/static_pages/Home';
import { About } from './components/static_pages/About';
import { NoMatch } from './components/static_pages/NoMatch';
import Sidebar  from './components/static_pages/SideBar';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      
    </React.Fragment>
    
  );
}

export default App;

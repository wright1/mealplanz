import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  HomePage from './components/homepg/homepg'
import About from './components/about/about'
import Dashboard from './components/dashboard/dashboard'
import GlobalStyles from './components/styles/globalStyle'
import Search from './components/search/search'
import Nav from './components/shared/nav'


function App() {
  return (
    <div>
   
    <Router>
      <GlobalStyles />
    <Nav />
    <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/about' component={ About } />
    <Route path='/dashboard' component={ Dashboard } />
    <Route path='/search' component={ Search } />
    </Switch>
    </Router>
    </div>
    
  );
}

export default App;

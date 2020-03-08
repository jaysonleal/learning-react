import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todo from './pages/Todo';

class App extends Component {
  
  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>            
            <Route path='/posts/:post_id' component={Todo}></Route>
          </Switch>
        </div>
      </Router>
      
    );
  };

}

export default App;

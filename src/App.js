import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ShopItem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route exact path="/shop" component={ Shop }/>
            <Route path="/shop/:id" component={ ItemDetail }/>
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Homepage</h1>
)

export default App;

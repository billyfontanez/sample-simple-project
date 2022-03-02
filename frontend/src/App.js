import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav"
import Home from "./components/pages/home"
import Items from "./components/pages/items"
import AddItem from "./components/pages/addItem"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/items" component={Items} />
              <Route path="/add-item" component={AddItem} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
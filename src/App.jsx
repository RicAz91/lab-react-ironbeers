import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import ListOfBeers from './views/ListOfBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer'
import Initial from './views/Initial';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Initial} />
          <Route path='/beers/:beerId' component={SingleBeer} />
          <Route path="/beers" exact component={ListOfBeers} />
          <Route path="/random" exact component={RandomBeer} />
          <Route path="/new" exact component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;

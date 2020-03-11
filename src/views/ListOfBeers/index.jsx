import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './style.scss';
import { list as beersList } from './../../sevices/beers';
import BeerItem from './../../componnents/BeerItem';

class ListOfBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      query: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    beersList()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: value
    });
  }
  get filteredBeers() {
    const filteredBeers = this.state.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredBeers;
  }

  render() {
    
    return (
      <div>
        <header>
          <Link to={'/'}>
            <button className="buttonHome">Home</button>
          </Link>
        </header>

        <form>
          <input
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search"
          />
        </form>

        <div className="beers__list">
          {this.filteredBeers.map(beers => (
            <BeerItem key={beers.id} {...beers} />
          ))}
        </div>
      </div>
    );
  }
}
export default ListOfBeers;

import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom';
import './style.scss'
import { list as beersList } from './../../sevices/beers';
import BeerItem from './../../componnents/BeerItem'

 class ListOfBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
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

  render() {
    return (
      <div>
      
        <header>
<Link to={'/'}><button className='buttonHome'>Home</button></Link>

        </header>
        <div className="beers__list">
          {this.state.beers.map(beers => (
            <BeerItem key={beers.id} {...beers} />
          ))}
        </div>
      </div>
    )
  }
}
export default ListOfBeers
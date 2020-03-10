import React, { Component, Fragment } from 'react';

import './style.scss';

import { random } from './../../sevices/beers';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.beerId;
    
    random(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;

    return (
      <div className="beer__single">
                {(beer && (
          <Fragment>
            <figure className="beer__single__image">
              <img src={beer.image_url} alt={beer.name} />
            </figure>
            <div className="beer__single__description">
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
              <h4>{beer.first_brewed}</h4>
              <p>{beer.description}</p>
              <h5>{beer.contributed_by}</h5>
            </div>
          </Fragment>
        )) ||
          ''}
      </div>
    );
  }
}

export default RandomBeer;

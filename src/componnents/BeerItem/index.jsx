import React from 'react';
import { Link } from 'react-router-dom';



import './style.scss';

const BeerItem = props => {
  console.log(props);
  return (
    
    <Link to={`/beers/${props._id}`} className="beer__item">
      <figure className="beer__image">
        <img src={props.image_url} alt={props.name} />
      </figure>
      <header className="beer__information">
        <div className="beer__details">
          <h3>{props.name}</h3>
          <h4>{props.tagline}</h4>
          <small><strong>Created By:</strong>{props.contributed_by}</small>
        </div>
        
      </header>
    </Link>
  );
};

export default BeerItem;
import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom';

class ListOfBeers extends Component {
  render() {
    return (
      <div>
        <Link to={"/beers"}>
          {' '}
          <img src={process.env.PUBLIC_URL + './images/beers.png'} alt="Beers" />
          <h2>All Bears</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et efficitur diam. Ut ultrices mi vitae sapien porttitor, a semper felis consequat. Vestibulum vel erat sed dui mollis pulvinar sit amet sed nunc. Duis odio nisl, suscipit condimentum volutpat vitae, pellentesque sed lorem. Mauris facilisis id dui id fringilla. Vestibulum viverra cursus diam vel volutpat. Pellentesque arcu nisi, vulputate ut suscipit ut, porttitor convallis neque. Praesent lacus orci, eleifend eu lacus tempor,</p>
        </Link>
        <Link to={"/random"}>
          <img src={process.env.PUBLIC_URL + './images/random-beer.png'} alt="Random Beers" />
          <h2>Random Bear</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et efficitur diam. Ut ultrices mi vitae sapien porttitor, a semper felis consequat. Vestibulum vel erat sed dui mollis pulvinar sit amet sed nunc. Duis odio nisl, suscipit condimentum volutpat vitae, pellentesque sed lorem. Mauris facilisis id dui id fringilla. Vestibulum viverra cursus diam vel volutpat. Pellentesque arcu nisi, vulputate ut suscipit ut, porttitor convallis neque. Praesent lacus orci, eleifend eu lacus tempor,</p>
        </Link>
        <Link to={"/new"}>
          <img src={process.env.PUBLIC_URL + './images/new-beer.png'} alt="New Beer" />
          <h2>New Bear</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et efficitur diam. Ut ultrices mi vitae sapien porttitor, a semper felis consequat. Vestibulum vel erat sed dui mollis pulvinar sit amet sed nunc. Duis odio nisl, suscipit condimentum volutpat vitae, pellentesque sed lorem. Mauris facilisis id dui id fringilla. Vestibulum viverra cursus diam vel volutpat. Pellentesque arcu nisi, vulputate ut suscipit ut, porttitor convallis neque. Praesent lacus orci, eleifend eu lacus tempor,</p>
        </Link>
      </div>
    )
  }
}
export default ListOfBeers
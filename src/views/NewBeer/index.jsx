import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './style.scss'
 class NewBeer extends Component {
   
  render() {
    return (
      <div>
      <header>
<Link to={'/'}><button className='buttonHome'>Home</button></Link>

        </header>
      <form className='newBeer__form'>
      <div className='newBeer__input'>
      <label>Name</label>
<input type='text' id="name" name="name"></input></div>
<div className='newBeer__input'>
<label>Tagline</label>
<input type='text' id="tagline" name="tagline"></input>
</div>

<div className='newBeer__input'>
<label>Description</label>
<textarea type='text' id="description" name="description"></textarea>
</div>
<div className='newBeer__input'>
<label>First Brewed</label>
<input type='text' id="first_brewed" name="first_brewed"></input>
</div>
<div className='newBeer__input'>

<label>Brewers tips</label>
<input type='text' id="brewers_tips" name="brewers_tips"></input>
</div>
<div className='newBeer__input'>

<label>Attenuation level</label>
<input type='number' id="attenuation_level" name="attenuation_level"></input>
</div>
<div className='newBeer__input'>
<label>Contributed by</label>
<input type='text' id="contributed_by" name="contributed_by"></input>
</div>
<button>Create Now</button>
      </form>
        
      </div>
    )
  }
}
export default NewBeer
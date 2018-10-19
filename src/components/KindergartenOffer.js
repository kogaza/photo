import React from 'react';
import '../App.css';
import { menuUp } from './functions'

export default class KindergartenOffer extends React.Component {
  
  componentDidMount() {
    menuUp("about-us-kindergarten-offer");
  }

  render() {
    return (
      <div id="about-us-kindergarten-offer"> 
        <h1 className="loremH1">Oferta Przedszkola działa</h1> 
        <div className='offerts'>
          <div className='offer'>
            <h2>Oferta 1</h2>
          </div>
          <div className='offer'>
            <h2>Oferta 2</h2>
          </div>
          <div className='offer'>
            <h2>Oferta 3</h2>
          </div>
          <div className='offer'>
            <h2>Oferta 4</h2>
          </div>
        </div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}


    




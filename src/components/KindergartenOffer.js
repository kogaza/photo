import React from 'react';
import '../App.css';
import { menuUp } from './functions'
// import jesien from '../offers/jesien.pdf';
// import wiosna from '../offers/wiosna.pdf';
// import karnawal from '../offers/karnawal.pdf';
// import tablo from '../offers/tablo.pdf';
// import swieta from '../offers/swieta.pdf';
// import kalendarz from '../offers/kalendarz.pdf';

export default class KindergartenOffer extends React.Component {

  componentDidMount() {
    menuUp("about-us-kindergarten-offer");
  }
  offertAlert = () => {
    alert('Oferta w przygotowaniu');
  }

  render() {
    return (
      <div id="about-us-kindergarten-offer">
        <h1 className="title">Oferta przedszkolna</h1>
        <div className='offersContainer'>
          <div onClick={this.offertAlert} className='offer offer-kindergarten autumn'>
            <a>Sesje jesienne</a>
            {/* <a href={jesien}>Sesje jesienne</a> */}
          </div>
          <div onClick={this.offertAlert} className='offer offer-kindergarten offer-margin calendar'>
            <a>Kalendarze</a>
            {/* <a href={kalendarz}>Kalendarze</a> */}
          </div>
          <div onClick={this.offertAlert} className='offer offer-kindergarten holidays'>
            <a>Sesje świąteczne</a>
            {/* <a href={swieta}>Sesje świąteczne</a> */}
          </div>
          <div onClick={this.offertAlert} className='offer offer-kindergarten carnival'>
            <a>Sesje karnawałowe</a>
            {/* <a href={karnawal}>Sesje karnawałowe</a> */}
          </div>
          <div onClick={this.offertAlert} className='offer offer-kindergarten offer-margin spring'>
            <a>Sesje wiosenne</a>
            {/* <a href={wiosna}>Sesje wiosenne</a> */}
          </div>
          <div onClick={this.offertAlert} className='offer offer-kindergarten tablo'>
            <a>Sesje tablo</a>
            {/* <a href={tablo}>Sesje tablo</a> */}
          </div>
        </div>
        <div className='descriptionOfferContainer'>
          <p>Szczegółowe oferty w przygotowaniu</p>
        </div>
      </div >
    )
  }
}


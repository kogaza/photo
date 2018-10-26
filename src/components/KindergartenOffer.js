import React from 'react';
import '../App.css';
import { menuUp } from './functions'
// import jesien from '../offers/jesien.pdf';
// import wiosna from '../offers/wiosna.pdf';
// import karnawal from '../offers/karnawal.pdf';
// import tablo from '../offers/tablo.pdf';

export default class KindergartenOffer extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-offer");
  }

  render() {
    return (
      <div id="about-us-studio-offer">
        <h1 className="title">Oferta przedszkolna</h1>
        <div className='offersContainer'>
          <div className='offerts'>
            <div className='offer offer-kindergarten autumn'>
              <a href='' target='_black'>Sesje jesienne</a>
              {/* <a href={jesien} target='_black'>Sesje jesienne</a> */}
            </div>
            <div className='offer offer-kindergarten spring'>
              <a href='' target='_black'>Sesje wiosenne</a>
              {/* <a href={wiosna} target='_black'>Sesje wiosenne</a> */}
            </div>
          </div>
          <div className='offerts'>
            <div className='offer offer-kindergarten carnival'>
              <a href='' target='_black'>Sesje karnawałowe</a>
              {/* <a href={karnawal} target='_black'>Sesje karnawałowe</a> */}
            </div>
            <div className='offer offer-kindergarten tablo'>
              <a href='' target='_black'>Sesje tablo</a>
              {/* <a href={tablo} target='_black'>Sesje tablo</a> */}
            </div>
          </div>
        </div>
        <div className='descriptionOfferContainer'>
          <p>Szczegółowe oferty w przygotowaniu</p>
        </div>
        <footer>Wszelkie prawa zastrzeżone</footer>

      </div >
    )
  }
}


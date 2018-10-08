import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import PdfRodzinna from '../offers/rodzinna.pdf';
import PdfCiazowa from '../offers/ciazowa.pdf';

export default class StudioOffer extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-offer");
  }

  render() {
    return (
      <div id="about-us-studio-offer">
        <h1 className="loremH1">Oferta studyjna</h1>
        <div className='offerts'>
          <div className='offer family'>
            <a href={PdfRodzinna} target='_black'>Fotografia rodzinna</a>
          </div>
          <div className='offer'>
            <a href={PdfCiazowa} target='_black'>Sesje brzuszkowe</a>
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


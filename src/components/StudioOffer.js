import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import rodzinne from '../offers/rodzinne.pdf';
import brzuszkowe from '../offers/brzuszkowe.pdf';
import noworodkowe from '../offers/noworodkowe.pdf';
import dzieciece from '../offers/dzieciece.pdf';
import komercyjne from '../offers/komercyjne.pdf';
import plenerowe from '../offers/plenerowe.pdf';
import wizerunkowe from '../offers/wizerunkowe.pdf';
import komunijne from '../offers/komunijne.pdf';


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
            <a href={rodzinne} target='_black'>Sesje rodzinne</a>
          </div>
          <div className='offer'>
            <a href={brzuszkowe} target='_black'>Sesje brzuszkowe</a>
          </div>
          <div className='offer'>
            <a href={noworodkowe} target='_black'>Sesje noworodkowe</a>
          </div>
          <div className='offer'>
            <a href={dzieciece} target='_black'>Sesje dzieciece</a>
          </div>
          <div className='offer'>
            <a href={komercyjne} target='_black'>Sesje komercyjne</a>
          </div>
          <div className='offer'>
            <a href={plenerowe} target='_black'>Sesje plenerowe</a>
          </div>
          <div className='offer'>
            <a href={wizerunkowe} target='_black'>Sesje wizerunkowe</a>
          </div>
          <div className='offer'>
            <a href={komunijne} target='_black'>Sesje komunijne</a>
          </div>
        </div>
        <footer>Wszelkie prawa zastrzeżone</footer>

      </div>
    )
  }
}


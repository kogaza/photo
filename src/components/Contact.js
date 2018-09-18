import React from 'react';
import '../App.css';
import { menuUp } from './functions';

export default class Contact extends React.Component {

  componentDidMount() {
    menuUp("map");
  }

  render() {
    const links =
      window.innerWidth < window.innerHeight & window.innerWidth <= 1000 ?
        <ul className='links-contact-mobile'>
          <li className='logo-mobile'>
            <a href="https://www.facebook.com/studiofotodawid/">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li className='logo-mobile'>
            <a href="https://www.instagram.com/fotodawid/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className='mail-mobile'>
            <a href="mailto:studio@fotodawid.eu" className='mailto'>studio@fotodawid.eu
          </a>
          </li>
        </ul>
        :
        <ul className='links-contact'>
          <li><a href="https://www.facebook.com/studiofotodawid/">
            <i className="fab fa-facebook-square"></i>
          </a></li>
          <li><a href="mailto:studio@fotodawid.eu" className='mailto'>studio@fotodawid.eu</a></li>
          <li><a href="https://www.instagram.com/fotodawid/">
            <i className="fab fa-instagram"></i>
          </a></li>
        </ul>

    return (
      <div id="map">
        <div className='container'>
          <h1 className='title'>Studio Foto Dawid</h1>
          <h2>43-100 Tychy, Plac Świętej Anny 2 </h2>
          <div className='phones-container'>
            <div className='phone-icon'>
              <img src={'/gallery/telephone.svg'} alt='telephone'></img>
            </div>
            <ul className='phones-contact'>
              <li><a href="tel:509529819">509 529 819</a></li>
              <li className='tel-office'><a href="tel:322274942">32 227 49 42</a></li>
              <li><a href="tel:501406293">501 406 293</a></li>
            </ul>
          </div>
          {links}
        </div>
        <div className='map-container'>
          <a href='https://www.google.pl/maps/place/Foto-Dawid/@50.1338714,18.9687241,18.75z/data=!4m5!3m4!1s0x4716c83bd652edbd:0x50cf97160c79d1fb!8m2!3d50.1337196!4d18.9691185'>
            <img src='/gallery/fotoDawid.png' alt='Foto Dawid'>
            </img>
          </a>
        </div>
        <footer>Wszelkie prawa zastrzeżone</footer>

      </div>
    )
  }
}
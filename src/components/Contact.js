import React from 'react';
import '../App.css';
import { menuUp } from './functions';
import MapContainer from './MapContainer';

export default class Contact extends React.Component {

  componentDidMount() {
    menuUp("map");
  }

  render() {
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
          <ul className='links-contact'>
            <li><a href="https://www.instagram.com/fotodawid/">
              <i className="fab fa-instagram"></i>
            </a></li>
            <li><a href="mailto:studio@fotodawid.eu">studio@fotodawid.eu</a></li>
            <li><a href="https://www.facebook.com/studiofotodawid/">
              <i className="fab fa-facebook-square"></i>
            </a></li>
          </ul>
        </div>
        <MapContainer />
        {/* <footer>Wszelkie prawa zastrzeżone</footer> */}
      </div>
    )
  }
}
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
        <ul>
          <li><a href="tel:509529819">tel. 509 529 819</a></li>
          <li className='tel-office'><a href="tel:0048322274942">tel. 32 227 49 42</a></li>
          <li><a href="tel:501406293">tel. 501 406 293</a></li>
        </ul>
        <ul>
          <li><a href="mailto:studio@fotodawid.eu">studio@fotodawid.eu</a></li>
          <li><a href="https://www.fotodawid.eu">www.fotodawid.eu</a></li>
        </ul>
      </div>

        {/* <div className='map-container'> */}
          <MapContainer />
        {/* </div> */}
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}
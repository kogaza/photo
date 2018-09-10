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
        <h1 className='title'>Kontakt działa</h1>
        <div className='map-container'>
          <MapContainer />
        </div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}
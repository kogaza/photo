import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
    const mapStyle = {
      position: 'relative',
      width: '100%',
      height: '800px'

    }
    return (
      <Map 
      google={this.props.google} 
      style={mapStyle}
      initialCenter={{
        lat: 50.13517,
        lng: 18.96641
      }}
      zoom={16}>
 
        <Marker 
          name={'Studio Dawid'} 
          position={{lat: 50.13365, lng: 18.9692}}/>
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)
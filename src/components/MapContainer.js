import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
    const mapStyle = {
      position: 'relative',
      width: '100%',
      height: '500px'

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
          // onClick={this.onMarkerClick}
          name={'Studio Dawid'} 
          position={{lat: 50.13365, lng: 18.9692}}/>
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDCF7Z3HDZN5LiwIK4bR7hAVgBCau9EfY0')
})(MapContainer)
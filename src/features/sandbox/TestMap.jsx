import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ location }) {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB-MBh3Vu5u62Rip5fpp0Cg6-cjFEiQNl4' }}
        center={location.Latlng}
        zoom={location.zoom}
      >
        <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}

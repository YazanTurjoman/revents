import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
  return <Icon name='marker' size='big' color='red' />;
}
const EventDetailedMap = ({ latlng }) => {
  const zoom = 14;
  return (
    <Segment attached='bottom' style={{ padding: 0 }}>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          center={latlng}
          zoom={zoom}
        >
          <Marker lat={latlng.lat} lng={latlng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;

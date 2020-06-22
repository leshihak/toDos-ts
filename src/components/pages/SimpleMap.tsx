import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = () => {
  const [center] = useState({ lat: 49.839684, lng: 24.029716 });
  const zoom = 11;
  return (
    <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBDa0XYD4n9uAhOAYUjVFHsbbwxzd1P4uU' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker name='My Marker' color='blue' lat={49.839684} lng={24.029716} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

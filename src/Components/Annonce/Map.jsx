import React, { useEffect, useRef, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({google, lat , log , set}) => {
   const [map, setMap] = useState(null)
    
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat:  set?.lat || 36.752887,
    lng: set?.lng || 3.042048 ,
  });

  const mapClicked = (mapProps, map, clickEvent) => {
    setSelectedCoordinates({
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng(),
    });
    lat.current.value = clickEvent.latLng.lat()
    log.current.value = clickEvent.latLng.lng()
    console.log(selectedCoordinates)
  };
  useEffect(()=>{
    console.log(set)
    if (set?.lat){
        var marker = new google.maps.Marker({
            position: { lat: selectedCoordinates.lat, lng: selectedCoordinates.lng },
            map: map,
            title: 'San Francisco'
          });
    }

  },[])

  return (
    
    <Map
        ref={el => setMap(el)}
      style={{ height: '300px', width: '500px' ,  display: 'block' }}
      google={google}
      zoom={8}
      initialCenter={{ lat: selectedCoordinates.lat, lng: selectedCoordinates.lng }}
      onClick={mapClicked}
      ini
    >
      <Marker position={selectedCoordinates} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCqYRhL7748Xa6Z6EntSId3p5NEh9htw5s',
})(MapContainer);

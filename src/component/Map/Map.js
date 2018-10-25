/* global google */
import React    from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}  
      zoom={props.zoom} 
      defaultCenter={{ lat: parseFloat(-34.397), lng: parseFloat(150.644) }}
      center={props.center}
      >
        {props.markers && 
          props.markers
            .filter(marker => marker.isVisible)
            .map((marker, idx, arr) => {
              const venueInfo = props.venues.find(venue => venue.id === marker.id);
              return (
                <Marker 
                  key={idx} 
                  position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng)}} 
                  onClick={() => props.handleMarkerClick(marker)}
                  animation={
                    arr.length === 1 
                      ? google.maps.Animation.BOUNCE 
                      : google.maps.Animation.DROP}
                >
                {marker.isOpen && venueInfo.bestPhoto && (
                  <InfoWindow>
                  <React.Fragment>
                    <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue"}/>
                    <p>{venueInfo.name}</p>
                  </React.Fragment>
                </InfoWindow>
                )}
              </Marker>
            )})}
    </GoogleMap>
  ))
);

class Map extends React.Component {
  render() {
    return (
    	<MyMapComponent
        {...this.props}
  			isMarkerShown
  			googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCetyY3BHQDRK2ZWP33T9UB53FFGniq7RI"
  			loadingElement={<div style={{ height: `100%` }} />}
 		 	  containerElement={<div className="map" aria-label="Map container"/>}
  			mapElement={<div style={{ height: `100%` }} />}
		/>
    );
  }
}

export default Map;
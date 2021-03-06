import React, { Component } from 'react';
import './App.css';
import Map from "./component/Map/Map.js";
import SquareAPI from "./API/";
import SideBar from "./component/SideBar/SideBar.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  };

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ marker: Object.assign(this.state.markers, markers) });
  };

  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker) });
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    SquareAPI.getVenueDetails(marker.id)
      .then(res => {
        const newVenue = Object.assign(venue, res.response.venue);
        this.setState({venue: Object.assign(this.state.venues, newVenue)})
      });
  };

  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  }

  componentDidMount(){
    SquareAPI.search({  
      near: "Austin,TX",
      query: "tacos",
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: parseFloat(venue.location.lat),
          lng: parseFloat(venue.location.lng),
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, center, markers });
    });
  }
  render() {
    return (
      <div className="App" role="application" aria-label="Neighborhood Map">
        <SideBar role="contentInfo" aria-label="Mexican food in KS" {...this.state} handleListItemClick={this.handleListItemClick}/>
        <Map id="map" {...this.state} handleMarkerClick= {this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;

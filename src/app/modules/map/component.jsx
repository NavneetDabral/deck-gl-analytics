import React  from 'react';
import {REACT_APP_TOKEN} from '../../config';
import 'mapbox-gl/dist/mapbox-gl.css'
import MapGL, {Marker, NavigationControl, FullscreenControl} from 'react-map-gl';
import CityPin from './city-pin';
import DeckGL, {ArcLayer} from 'deck.gl';

const TOKEN = REACT_APP_TOKEN; // Set your mapbox token here
const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        height:"90vh",
        width:"100%",
        latitude: 12.92415,
        longitude:  77.67229,
        zoom: 13,
        bearing:-50,
        pitch: 50
      },
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  
  };




  _renderCityMarker = (location, index) => {
    console.log(location);
    return (
      <Marker key={`marker-${index}`} longitude={+location.from_long} latitude={+location.from_lat}>
        <CityPin size={20} />
      </Marker>
    );
  };

  
  render() {
    const {viewport} = this.state;
    const locations = this.props.locationInfo;
    console.log(locations);
     
    // const layers = [
    //   new LineLayer({id: 'line-layer', data, stroked: false,
    //   strokeWidth: 4,
    //   getSourceColor: x => [0, 0, 255],
    //   getTargetColor: x => [0, 255, 0],
    //   })];
    return (
    
          
      <MapGL
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
     
        {
          locations.data?locations.data.map(this._renderCityMarker):null
        }
        <DeckGL
          viewState={viewport}
          layers={[
            new ArcLayer({
              data: [
                {
                  sourcePosition: [12.92415, 77.67229],
                  targetPosition: [12.92415, 76.67229]
                }
              ],
              strokeWidth: 4,
              getSourceColor: x => [0, 0, 255],
              getTargetColor: x => [0, 255, 0]
            })
          ]}
        />


        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>


    
    );
  }
}

export default Map;
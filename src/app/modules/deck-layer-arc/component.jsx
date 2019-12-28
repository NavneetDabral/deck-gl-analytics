import React from 'react';
import DeckGL, {ArcLayer} from 'deck.gl';
import MapGL from 'react-map-gl';
import {REACT_APP_TOKEN} from '../../config';

const TOKEN = REACT_APP_TOKEN; // Set your mapbox token here

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude:77.580643,
        latitude: 12.972442,
        zoom: 8,
        bearing: -50,
        pitch: 50
      }
    };
  }



  _onViewportChange = viewport => {
    this.setState({viewport});
  };

  render() {
    const {viewport} = this.state;
    console.log(this.props.dataMapped)

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="90vh"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={TOKEN}
      >
        <DeckGL
          viewState={viewport}
          layers={[
            new ArcLayer({
              data: [
               ...this.props.dataMapped
              ],
              strokeWidth: 4,
              getSourceColor: x => [0, 0, 255],
              getTargetColor: x => [0, 255, 0]
            })
          ]}
        />
      </MapGL>
    );
  }
}
export default Component;
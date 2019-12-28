import React  from 'react';
import {REACT_APP_TOKEN} from '../../config';
import 'mapbox-gl/dist/mapbox-gl.css'
import DeckGL from '@deck.gl/react';
import {ArcLayer} from '@deck.gl/layers';
import ReactMapGL from 'react-map-gl';


const TOKEN = REACT_APP_TOKEN; // Set your mapbox token here


const Map =()=> {
 
  const [state, setState] = React.useState({
    viewport: {
      latitude: 40.6643,
      longitude: -73.9385,
      zoom: 8,
      height:"100%",
      width:"100%"
    }
  });

  
  

    const {viewport} = state.viewport;
    // const layers = [
    //   new LineLayer({id: 'line-layer', data, stroked: false,
    //   strokeWidth: 4,
    //   getSourceColor: x => [0, 0, 255],
    //   getTargetColor: x => [0, 255, 0],
    //   })];
    return (
    
      <ReactMapGL
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => setState({ viewport })}
        mapboxApiAccessToken={TOKEN}
      >
       <DeckGL
          viewState={viewport}
          layers={[
            new ArcLayer({
              data: [
                {
                  sourcePosition: [40.6643, -73.9385], 
                  targetPosition: [34.0194, -118.4108]
                }
              ],
              strokeWidth: 2,
              getSourceColor: x => [255, 0, 255],
              getTargetColor: x => [0, 255, 0]
            })
          ]}
        />
        
      </ReactMapGL>
    );
  }


export default Map;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';

export let initialState = {
  appreducer:{
      data:{
          name:"navneet"
      },
      appState:{
        test:false,
        live:true,
        location_status:false,
        analytics_flag:false,
        locationInfo:[],
        success_popup:false,
        userInfo:null,
        viewport: {
          height:"90vh",
          width:"100%",
          latitude: 12.92415,
          longitude:  77.67229,
          zoom: 13,
          bearing:-60,
          pitch: 60
        },
       
      }   
  }
};

const store = configureStore(initialState);
window.store=store;
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

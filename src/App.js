import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import {history} from './store/configureStore'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from './app/common/header';
import Map from './app/modules/map';
import FileUpload from './app/common/file-upload';
import Analytics from './app/modules/analytics';
import Loyalty from './app/modules/loyalty';

const theme = createMuiTheme({
  palette: {
    primary:{main:'#6A1B9A'} ,
    secondary:{main:'#536dfe'} ,
    error: {main:'#f44336'},
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 13,
  },
});

class App extends React.Component {

render(){
  
  return (
    <div className="App">
      
     
      <ThemeProvider theme={theme}>
     
          <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
          <Header></Header>
            <Switch>
              <Route exact={true} path="/" component={FileUpload} />
              <Route  path="/locations" component={Map} />
              <Route  path="/analytics" component={Analytics} />
              <Route  path="/user-loyalty" component={Loyalty} />
            </Switch>
         </ConnectedRouter>
       </ThemeProvider>

    
    </div>
  );
}
}

export default App;

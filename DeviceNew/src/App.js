import React from 'react';
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { IconButton} from '@material-ui/core';
import { Switch } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import {BrowserRouter,Route} from "react-router-dom";
import Display2 from './device';
import Display from './deviceDetail';
import "./App.css";
import AppBarDevice from './AppBar';
import NewTopology from './NewTopology';
import Topologym from './Topologym';
import Network from './Topologym';
import Networkss from './Graph';
import Networkimage from './ImageGraph';
import MiddleGraph from './MiddleGraph';
import MAPSSS3 from './StateMap';
import NewNetwork from './ImageGraphJson';
//import New_network from './ClasstoFuncgraph';
import NewNetworkA from './Jsongraph';
import DisplayDB from './DB_DeviceDB';
import RouteDevice from './DB_Route';
//import MyComponent from './NewMap'


   



/*function App(){ 
  const routes= ["/bb","/aa"] ;
    return (
        <div>
          <BrowserRouter>
            <Route path="/" render={(history)=>(
              <AppBar position="static">
                
                <Tabs value={history.location.pathname !== '/'? history.location.pathname: false } > 
                
                  <Tab   label="DEVICE TABLES" value={routes[0]} component={Link} to={routes[0]}  />
                  <Tab   label="DEVICE DETAILS" value={routes[1]} component={Link} to={routes[1]}  />
                </Tabs>
              </AppBar>
            )}/>
              
            
            <Switch>
              < Route exact path={ '/bb'} >
                <Display/>
              </Route>
              < Route exact path={"/aa"}  >
                <Display2/>
              </Route>
            </Switch>
          </BrowserRouter>    
        </div>
    );
}*/

function App(){
  return(
    <div //style={{maxHeight:"20px",maxWidth:"30px"}}
    >
      <RouteDevice/>
      
      

    
    </div>

  )
}
  
export default App;


/*import { Component } from 'react';
import { Map } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Marker } from 'google-maps-react';
class App extends Component{
  render(){
    return(
      <Map
          google={this.props.google}
          style={{width:"100%" , height:"100"}}
          zoom ={10}
          initialCenter={{
            lat:7.264414,
            lng:79.854469
          }}
      >
        <Marker
            position={{
              lat:7.264414,
              lng:79.854469


            }}
        />
      </Map>
    )
  }
}

  
export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(App)*/


/*import GoogleMaps2 from './GoogleMaps2';

function App() {
  return (
    <div className="App">
      <h1>Google Maps</h1>
      <GoogleMaps2 />
    </div>
  );
}

export default App;*/

  
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link ,Switch} from 'react-router-dom';
import {BrowserRouter,Route} from "react-router-dom";
import Display2 from './device';
import Display from './deviceDetail';
import "./App.css";
import {Display3} from './load';




              

/*function AppBarDevice(){ 
  const routes= ["/bb","/aa"] ;
    return (
        <div>
          <BrowserRouter>
            <Route path="/">
              <AppBar position="static">
                
                <Tabs > 
                
                  <Tab   label="DEVICE TABLES" value={routes[0]} component={Link} to={routes[0]}  />
                  <Tab   label="DEVICE DETAILS" value={routes[1]} component={Link} to={routes[1]}  />
                </Tabs>
              </AppBar>
            </Route>
            <Switch>
              < Route path='/bb' component={Display2}  />
              < Route path='/aa' component={Display} />
            </Switch>
          </BrowserRouter>    
        </div>
    );
}
export default AppBarDevice;*/

function AppBarDevice(){ 
  const routes= ["/DeviceTables","/DeviceDetails"] ;
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
              < Route exact path= "/DeviceTables" component={Display2} />
              < Route exact path='/DeviceDetails' component={Display} />
              < Route exact path="/DeviceTables/:id" component={Display3} />
            </Switch>
          </BrowserRouter>    
        </div>
    );
}

export default AppBarDevice;
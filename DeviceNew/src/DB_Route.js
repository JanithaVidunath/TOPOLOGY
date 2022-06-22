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
import DisplayDB from './DB_DeviceDB';
import { DisplayCD } from './DB_load01';
import DisplayIF from './DB_deviceInterface';
import DisplayDomain from './DB_Domain';
import DisplayLocal from './DB_Local';
import DisplayCCT from './DB_CCT_ID';
import { DisplayRT } from './DB_CCT_load';
import DisplayMap from './DB_GoogleMapTP';




              

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

function RouteDevice(){ 
  const routes= ["/all_devices","/device_details","/domain_vrf","/vrf_local","/cct_id"] ;
    return (
        <div>
          <BrowserRouter>
            <Route path="/" render={(history)=>(
              <AppBar position="static">
                
                <Tabs style={{backgroundColor:"black"}} value={history.location.pathname.includes('/all_devices') ? routes[0]:history.location.pathname.includes('/cct_id') ?  routes[4] :history.location.pathname!=="/"? history.location.pathname:false
               } > 
                  <Tab   label="CIRCUIT ID" value={routes[4]} component={Link} to={routes[4]}  />
                  <Tab   label="ALL DEVICES" value={routes[0]} component={Link} to={routes[0]}  />
                  <Tab   label="DEVICE DETAILS" value={routes[1]} component={Link} to={routes[1]}  />
                  <Tab   label="VRF DOMAIN" value={routes[2]} component={Link} to={routes[2]}  />
                  <Tab   label="VRF LOCAL" value={routes[3]} component={Link} to={routes[3]}  />
                </Tabs>
              </AppBar>
            )}/>
              
            
            <Switch>
              < Route exact path= "/cct_id" component={DisplayCCT} />
              < Route exact path= "/all_devices" component={DisplayDB} />
              < Route exact path='/device_details' component={DisplayIF} />
              < Route exact path='/domain_vrf' component={DisplayDomain} />
              < Route exact path='/vrf_local' component={DisplayLocal} />
              < Route exact path="/all_devices/:id" component={DisplayCD} />
              < Route exact path="/cct_id/:id" component={DisplayMap}/>
            </Switch>
          </BrowserRouter>    
        </div>
    );
}

export default RouteDevice;

/*value={
  history.location. pathname.includes('users')?
  (props.match.url + '/user-management/users')
  :
  history.location. pathname.includes('roles')?
  (props.match.url + '/user-management/roles')
  :
  history.location. pathname.includes('companies')?
  (props.match.url + '/user-management/companies')
  :
  false
  }>*/
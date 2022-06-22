import { Component } from 'react';
import { Map } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Marker } from 'google-maps-react';
import {x} from "./load";
import {y} from "./load";
class DeviceMap extends Component{
  
  render(){
    //const lat= parseFloat(x)
    //const lng= parseFloat(y)
   // const lat= 7.1234
    //const lng= 23.11223
    return(
      <Map
          google={this.props.google}
          style={{width:"100%" , height:"100"}}
          zoom ={4}
          initialCenter={{
            lat:this.props.lat,
            lng:this.props.lng
          }}      
      > 

        <Marker
            position={{
              lat:this.props.lat,
              lng:this.props.lng
             


            }}

            icon={{
             url: `/WhatsApp Image 2022-03-23 at 13.25.21.jpeg`,
             scaledSize: new window.google.maps.Size(25, 25)
           }}
        />
      </Map>
    )
  
  }
  
}

 
export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(DeviceMap)

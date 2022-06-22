/*mport { Component } from 'react';
import { Map } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Marker } from 'google-maps-react';
import Devi from "./device_insync.json";

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
          zoom ={10}
         // initialCenter={{
           // lat:7.666,
           // lng:79.854469
         // }}      
      > 
      {
        Devi.map((disData)=>(
            <Marker
              lat={parseFloat( disData.device_lan)}
              lng={parseFloat( disData.device_long)}
            />

          
          
          )
      }

        {/*<Marker
            position={{
              lat:this.props.lat,
              lng:this.props.lng
             


            }}}
        
      </Map>
    )
  
  }
  
}

 
export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(DeviceMap)*/



/*import { Component } from 'react';
import { Map } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Marker } from 'google-maps-react';
import Devi from "./device_insync.json";
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
            lat:23.885942,
            lng:45.079163
          }}      
      > 
        {
          Devi.map(disData=>(
            <Marker
              key={disData.UUID}
              position={{
                lat:disData.device_lan,
                lng:disData.device_long
              


              }}
            />

          ))

          

        }
        
      </Map>
    )
  
  }
  
}

 
export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(DeviceMap)*/



import {useState} from 'react';
import {useEffect} from 'react'
import { Map } from 'google-maps-react';
import { GoogleApiWrapper,withGoogleMap} from 'react-google-maps';
import {withScriptjs} from 'react-google-maps'
import { Marker } from 'react-google-maps';
import Devi from "./device_insync.json";
import { InfoWindow } from 'react-google-maps';
import { GoogleMap } from 'react-google-maps';
import {Polyline} from 'react-google-maps';
import {Polygon} from 'react-google-maps';


var arr1 =[];
var arr2=[];
function GoogleTable(){
    const [selectedPark, setSelectedPark] = useState(null);
  

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
    }, []);
    //const lat= parseFloat(x)
    //const lng= parseFloat(y)
   // const lat= 7.1234
    //const lng= 23.11223
    return(
      
      <GoogleMap
          
          style={{width:"100%" , height:"100"}}
          
          defaultZoom={4}
          defaultCenter={{ lat:23.885942, lng: 45.079163 }}
          //initialCenter={{
          //  lat:23.885942,
         //   lng:45.079163
         // }}      
      > 
        {
          Devi.map((disData)=>(
          
            //if (parseFloat(disData.device_lan)<90 && parseFloat(disData.device_long)<180){
             
              
            <Marker
              
              
            key={disData.UUID}
            position={{
              lat:parseFloat(disData.device_lan),
              lng:parseFloat(disData.device_long)
            


              }}
              onClick={() => {
                setSelectedPark(disData);
              }}

              icon={{
                url: `/WhatsApp Image 2022-03-23 at 13.25.21.jpeg`,
               scaledSize: new window.google.maps.Size(25, 25)
              }}
            />
            )
            )
          }
      
        {Devi.map((disData)=>(
        
          arr1=arr1.concat(disData.device_lan)
         
          

        ))}
        {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: parseFloat(selectedPark.device_lan),
              lng: parseFloat(selectedPark.device_long)
            }}
          >
            <div>
            <h2>{selectedPark.device_name}</h2>
            <p>{selectedPark.device_status}</p>
          </div>
        </InfoWindow>
      )}
      
    </GoogleMap>
    
    )
    
    
  }



const MapWrapped = withScriptjs(withGoogleMap(GoogleTable));

 
/*export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(GoogleTable)*/
export default function MAPSSS() {
  return (
    
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ "AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"}

        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}              
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

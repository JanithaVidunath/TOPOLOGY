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

import { x } from './load';


var arr1 =[];
var arr2=[];
function GoogleTable(){
    const [selectedPark, setSelectedPark] = useState(null);
    //var EmptyList=[]
    const [list, setList] = useState([]);
    //const appendList={}
  useEffect(()=>{
     var EmptyList=[] 
      
      {for (let i=0 ;i<Devi.length;i++){
          var appendList={};
          appendList.lat=parseFloat(Devi[i].device_lan);
          appendList.lng=parseFloat(Devi[i].device_long);
          //{console.log(Devi.device_lan)}
         // {console.log(Devi.device_long)}
         // {console.log(Devi)}
          //{console.log(appendList)}
          EmptyList.push(appendList)
          //setList(...EmptyList,appendList);
        }}
        setList(EmptyList)
  },[])
  
  
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
        {
          <Polyline
       /* path={ [{lat: 7.264414, lng: 79.854469},
          {lat: 28.264414, lng: 9.854469},
          {lat: 14.264414, lng: 81.854469},
          {lat: 11.264414, lng: 18.854469},
          {lat: 25.264414, lng: 83.854469},
          {lat: 15.264414, lng: 82.854469},
          {lat: 7.264414, lng: 85.854469},
          {lat: 19.264414, lng: 35.854469},
          {lat: 17.264414, lng: 89.854469},
          {lat: 39.264414, lng: 69.854469},
          {lat: 11.264414, lng: 10.854469},
          {lat: 8.264414, lng: 79.854469},
          {lat: 34.264414, lng: 55.854469},
          {lat: 29.264414, lng: 49.854469},
          {lat: 7.264414, lng: 57.854469}]}*/
          path ={list}
          options={{ 
            strokeColor: 'brown',
            strokeOpacity: 2,
            strokeWeight: 1
          }}
          geodesic={true}

        
        />}
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
export default function MAPSSS3() {
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

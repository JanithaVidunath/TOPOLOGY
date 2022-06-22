import {useState} from 'react';
import {useEffect} from 'react'
import { Map } from 'google-maps-react';
import { GoogleApiWrapper,withGoogleMap} from 'react-google-maps';
import {withScriptjs} from 'react-google-maps';
import { Marker } from 'react-google-maps';

import { InfoWindow } from 'react-google-maps';
import { GoogleMap } from 'react-google-maps';
import {Polyline} from 'react-google-maps';

function GoogleTable(){
    const [selectedPark, setSelectedPark] = useState(null);
    const Devi =["7.6547","34.1267","27.6547","84.1267"]

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
          defaultCenter={{ lat:17.885942, lng: 60.079163 }}
          //initialCenter={{
          //  lat:23.885942,
         //   lng:45.079163
         // }}      
      > 
        {

         
          
            //if (parseFloat(disData.device_lan)<90 && parseFloat(disData.device_long)<180){
        
              
            <Marker
              
              
            
            position={{
              //{[{lat:7.6547 ,lng:34.1267},{lat:27.6547 ,lng:84.1267}]}
            
             lat:7.6547,
              lng:34.1267
            }}
            


              
              //onClick={() => {
              //  setSelectedPark(disData);
             // }}

              //icon={{
               // url: `/skateboarding.svg`,
               // scaledSize: new window.google.maps.Size(25, 25)
             // }}
            />
            
            
              
          

          

        }
        {

         
          
//if (parseFloat(disData.device_lan)<90 && parseFloat(disData.device_long)<180){
 
  
              <Marker
                
                

            
              Position={{
                lat:27.6547,
                lng:84.1267
              }}


                
                //onClick={() => {
                //  setSelectedPark(disData);
              // }}

                //icon={{
                // url: `/skateboarding.svg`,
                // scaledSize: new window.google.maps.Size(25, 25)
              // }}
              />


          




        }
        {
            /*<Polyline
            paths={[{lat: 3.028846373870724, lng: 101.62019493865353},
            {lat: 3.0293392107899226, lng: 101.62000181960445},
            {lat: 3.0297677644503347, lng: 101.61980870055538},
            {lat: 3.0301963179410842, lng: 101.61967995452267},
            {lat: 3.0307105819060256, lng: 101.6194868354736},
            {lat: 3.0319319578431805, lng: 101.61916497039181}]}
            
            />*/
            <Polyline 
                path={ [{lat: 13.028846373870724, lng: 101.62019493865353},
                  {lat: 3.0293392107899226, lng: 101.62000181960445},
                  {lat: 3.0297677644503347, lng: 101.61980870055538},
                  {lat: 3.0301963179410842, lng: 101.61967995452267},
                  {lat: 3.0307105819060256, lng: 101.6194868354736},
                  {lat: 3.0319319578431805, lng: 101.61916497039181}]}
                
            />
        }
        {/*selectedPark && (
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
          )*/}
        
    </GoogleMap>
    )
  }
  

const MapWrapped = withScriptjs(withGoogleMap(GoogleTable));

 
/*export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"

})(GoogleTable)*/
export default function MAPSSS2() {
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
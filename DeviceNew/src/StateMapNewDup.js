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
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
//import {useJsApiLoader} from 'react-google-maps';
import abc from 'react-google-maps';


import { x } from './load';

const google =window.google ;
var arr1 =[];
var arr2=[];
/*function GoogleTable(){
    const [selectedPark, setSelectedPark] = useState(null);
    //var EmptyList=[]
    const [list, setList] = useState([]);
   // const [graphnode,setGraphNode] = useState(null);
    //const appendList={}
  useEffect(()=>{
     var EmptyList=[] 
      
      {for (let i=0 ;i<Devi.length;i++){
          var appendList={};
          appendList.lat=parseFloat(Devi[i].device_lan);
          appendList.lng=parseFloat(Devi[i].device_long);
          
         // {console.log(google.maps.Point(Math.floor(parseFloat(Devi[i].device_lan*4)),Math.floor(parseFloat(Devi[i].device_long*4))))}
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
          //defaultOptions={{zoomControl:false}}
          //MapOptions={{scrollwheel:true}}
          defaultZoom={4}
          defaultCenter={{ lat:23.885942, lng: 45.079163 }}
          //initialCenter={{
          //  lat:23.885942,
         //   lng:45.079163
         // }}      
      > 
      {Devi.map((disData)=>(
        console.log("A")
         //ss= new.google.maps.Point(parseFloat(disData.device_lan*4)),Math.floor(parseFloat(disData.device_long*4)))
         console.log(google.maps.Point(Math.floor(parseFloat(disData.device_lan*4)),Math.floor(parseFloat(disData.device_long*4))))
      ))}
        {
          Devi.map((disData)=>(
          
            //if (parseFloat(disData.device_lan)<90 && parseFloat(disData.device_long)<180){
            
            
            <Marker
              
              
            key={disData.UUID}
            position={{
              lat:parseFloat(disData.device_lan),
              lng:parseFloat(disData.device_long)
            
              }}
              //onclick to hover
              onMouseOver={() => {
                setSelectedPark(disData);
              }}
              icon={{
                url: disData.image,
               scaledSize: new window.google.maps.Size(40,40)
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
          {lat: 7.264414, lng: 57.854469}]}
          path ={list}
          
          options={{ 
            strokeColor: 'brown',
            strokeOpacity: 2,
            strokeWeight: 1
          }}
          geodesic={true}
        
        />}
        
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
            <p>{selectedPark.catagory}</p>
          </div>
        </InfoWindow>
      )}
      
    </GoogleMap>
    
    
    )
    
    
  }
const b = selectedPark;
const MapWrapped = withScriptjs(withGoogleMap(GoogleTable));
 
export default GoogleApiWrapper({
  
  apiKey:"AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"
})(GoogleTable)*/
export default function MAPSSS5() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [popselectedPark, setpopSelectedPark] = useState(null);
    //var EmptyList=[]
  //const [list, setList] = useState([]);
  const [list, setList] = useState([]);
  //const [selectedPark, setSelectedPark] = useState(null);
  //var EmptyList=[]
  //const [list, setList] = useState([]);
 // const [graphnode,setGraphNode] = useState(null);
  //const appendList={}
useEffect(()=>{
   var EmptyList=[] 
    
    {for (let i=0 ;i<Devi.length;i++){
        var appendList={};
        appendList.lat=parseFloat(Devi[i].device_lan);
        appendList.lng=parseFloat(Devi[i].device_long);
        
       // {console.log(google.maps.Point(Math.floor(parseFloat(Devi[i].device_lan*4)),Math.floor(parseFloat(Devi[i].device_long*4))))}
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

  useEffect(() => {
    const listener2 = e => {
      if (e.key === "Escape") {
        setpopSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener2);

    return () => {
      window.removeEventListener("keydown", listener2);
    };
    }, []);
  const MapWrapped1 = withScriptjs(withGoogleMap((props)=>
  //const GoogleTable=()=>{
    //const [selectedPark, setSelectedPark] = useState(null);
    //var EmptyList=[]
   
    //const lat= parseFloat(x)
    //const lng= parseFloat(y)
   // const lat= 7.1234
    //const lng= 23.11223
   
    
    
      <GoogleMap
          
          style={{width:"100%" , height:"100"}}
          //defaultOptions={{zoomControl:false}}
          //MapOptions={{scrollwheel:true}}
          defaultZoom={4}
          defaultCenter={{ lat:23.885942, lng: 45.079163 }}
          //initialCenter={{
          //  lat:23.885942,
         //   lng:45.079163
         // }}      
         
      > 

      
        {props.isMarkerShown &&
          Devi.map((disData)=>(
          
            //if (parseFloat(disData.device_lan)<90 && parseFloat(disData.device_long)<180){
            
            
            <Marker
              
              
            key={disData.UUID}
            position={{
              lat:parseFloat(disData.device_lan),
              lng:parseFloat(disData.device_long)
            


              }}
              //onclick to hover
              onClick={() => {
                
                setpopSelectedPark(disData);
              }}
              
              onMouseOver={() => {
         
                console.log("ghh")
                //setpopSelectedPark(disData);
              }}
              onMouseOut={()=>{
                
                //setpopSelectedPark(null);
              }}
              
              icon={{
                url: disData.image,
               scaledSize: new window.google.maps.Size(40,40)
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
         // path ={list}
          
          //options={{ 
           // strokeColor: 'brown',
           // strokeOpacity: 2,
            //strokeWeight: 1
         // }}
          //geodesic={true}

        
        />}
        
        {props.isMarkerShown && popselectedPark  &&  (
          <InfoWindow
            onCloseClick={() => {
              setpopSelectedPark(null);
            }}
            

            position={{
              lat: parseFloat(popselectedPark.device_lan)+2,
              lng: parseFloat(popselectedPark.device_long)+2
            }}
          >
            <div>
            <h2>{popselectedPark.device_name}</h2>
            <p>{popselectedPark.device_status}</p>
            <p>{popselectedPark.catagory}</p>
          </div>
        </InfoWindow>
      )}

   
      
      
    </GoogleMap>
    
    
    )

    
  )

//const b = selectedPark;

//const MapWrapped = withScriptjs(withGoogleMap(GoogleTable));
  
  return (
    
    <div style={{zIndex:"-1", width: "100vw", height: "100vh" }}
    >
      
      <div style={{/*display:"inline-block",*/ marginRight:"50px",maxWidth:"20vw"}}>
      {selectedPark &&<>
             
             <Paper elevation={10} style={{backgroundColor:"orange" ,borderRadius:"30px" ,/*width:"60%" ,*/ /*border: `4px dashed ${red[500]}`paddingLeft:"20px",*/
                           textShadow:'2px 2px 5px green', boxShadow:"20px 20px lightpink", /*transformOrigin:{vertical:"top",horizontal:"right"}*/}}>
               <MenuList>
                   
                   <MenuItem>Device Catagory:<button class='abb'>{selectedPark.catagory}</button></MenuItem>
                   <MenuItem><img src ={`/${selectedPark.image}`} width="100px" height="100px" alt="v"/></MenuItem>
                   {/*<MenuItem >Device Interface:<br/><br/>{graphnode.title.split("\n").map(str => <p>{str}</p>)}</MenuItem>*/}
                   {<MenuItem style={{whiteSpace: 'normal'}} >
                   <button class="abcd">Device Interface:</button>
                       <Typography  style={{width:"50%" , wordWrap:"break-word"}}>
                           {selectedPark.title}
                       </Typography>
                       
      </MenuItem>}
                   {/*<MenuItem >Device Interface:<br/>{graphnode.title}</MenuItem>*/}
                   {<MenuItem><div class="dis">
                   <button class="aaaa">Device Location:</button>
                   <div>
                   latitude:<button>{selectedPark.device_lan}</button>
                   <div>
                   longitude:<button>{selectedPark.device_long}</button>

                   </div>

                   </div>
                     </div></MenuItem>}
                   {//<MenuItem><button class="aaaa">Device Location:</button>latitude:<button>{selectedPark.device_lan}</button>,longitude:<button>{selectedPark.device_long}</button></MenuItem>
                   }
                   {<MenuItem style={{whiteSpace: 'normal'}} >
                   <button class="abcde">Device Description:</button>

                       <Typography  style={{width:"80%" , wordWrap:"break-word"}}>
                           <Button>{selectedPark.device_description}</Button>
                       </Typography>
                       
      </MenuItem>}
                   {/*<MenuItem>Device Description:<br/>{graphnode.device_description}</MenuItem>*/}
                  
                   {/*<MenuItem>Device Connectivity:<br/>{graphnode.connect_to.join("\n")}</MenuItem>*/}
                  { /*<MenuItem>De:<button>{for (let j=0;j<graphnode.connect_to.length;j++){graphnode.connect_to[j].join("\n")}}</button></MenuItem>*/}
                   
                   
                   {/*<MenuItem style={{whiteSpace: 'normal'}} >
                       <Typography  style={{width:"50%" , wordWrap:"break-word"}}>
                           Device Description:{graphnode.device_description}
                       </Typography>
                       
      </MenuItem>*/ }
                   
               
                   
                   
                   
               </MenuList>
             </Paper>
        </>}
      
       </div> 
        
 
      <MapWrapped1

        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ "AIzaSyAV1sTqpNenlC9cmmZvYpwbkpuZm0vzpHk"}
        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}              
        mapElement={<div style={{ height: `100%` }} />}
      />

      
      
      
      
    </div>
    
    
  );
}
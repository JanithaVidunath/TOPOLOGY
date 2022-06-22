import React from "react";
//import vis from "react-graph-vis";
import vis from "react-vis";
import Devi from './node&edges.json';

import Graph from "react-graph-vis";
//import PreTitle from "./Pretitle";
//import preTitle from "./Pretitle";
 
//import "./styles.css";
// need to import the vis network css in order to show tooltip
//import "./network.css";
import {useState} from 'react';
import {useEffect} from 'react';
import Display from "./deviceDetail";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { red } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
 
function PreTitle(text){
  const container =document.createElement("pre");
  container.innerText =text;
  return container;
}




function NewNetwork() {

    const [listnode, setListnode] = useState([]);
    const [listedge, setListedge] = useState([]);
    const [graphnode,setGraphNode] = useState(null);
    //const appendList={}
    const clickMe=()=>{
      console.log("aabc")
    
  } 
  useEffect(()=>{
     var NodeList=[]
     
      
      {for (let i=0 ;i<Devi.length;i++){
          var appendList={};
          appendList.id=parseFloat(Devi[i].id);
          appendList.label=Devi[i].label;
          appendList.title=Devi[i].title;
          appendList.shape=Devi[i].shape;
          appendList.image=Devi[i].image;
          appendList.shadow=Devi[i].shadow;
          appendList.x=Devi[i].x;
          appendList.y=Devi[i].y;
          //{console.log(Devi.device_lan)}
         // {console.log(Devi.device_long)}
         // {console.log(Devi)}
          //{console.log(appendList)}
          NodeList.push(appendList)
          //setList(...EmptyList,appendList);
        }}
        setListnode(NodeList)
  },[])


  useEffect(()=>{
    
    var EdgeList=[] 
     
     {for (let i=0 ;i<Devi.length;i++){

         {for(let j=0;j<Devi[i].connect_to.length;j++){
             var appendList2={}
             appendList2.from=parseFloat(Devi[i].id)
             appendList2.to=parseFloat(Devi[i].connect_to[j])
             EdgeList.push(appendList2)

         }}
        
         //{console.log(Devi.device_lan)}
        // {console.log(Devi.device_long)}
        // {console.log(Devi)}
         //{console.log(appendList)}
         //NodeList.push(appendList)
         //setList(...EmptyList,appendList);
       }}
       setListedge(EdgeList)
 },[])

{console.log(listedge)}
{console.log(listnode)}

  const graph = {
    nodes:listnode,/*[
      { id: 1, label: "Router 1", title:'interface Ge0/1,interface Ge0/2,interface Ge0/3', shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow: true ,color:{hover:"red"}},
      { id: 2, label: "Router 2", title: "interface Ge0/1,interface Ge0/2" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true,color:{hover:"red"}},
      { id: 3, label: "Switch 1", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 4, label: "Switch 2", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 5, label: "Switch 3", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true ,color:{background:"yellow",hover:"orange"}},
      { id: 6, label: "Router 3", title: "interface Ge0/1" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true,color:{hover:"red"} },
      { id: 7, label: "Router 4", title: "interface Ge0/1,interface Ge0/2,interface Ge0/4,interface Ge0/4",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true,color:{hover:"red"} },
      { id: 8, label: "Router 5", title: PreTitle("interface Ge0/1\ninterface Ge0/2\ninterface Ge0/3\ninterface Ge0/4") ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",fixed:true ,shadow:true,color:{hover:"red"} },
      { id: 9, label: "Switch 4", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 10, label: "Switch 5", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 11, label: "Switch 6", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true ,color:{background:"yellow",hover:"orange"}},
      { id: 12, label: "Router6", title: "interface Ge0/1",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg",shadow:true ,color:{hover:"red"}}
      
    
    ],*/

    edges:listedge/*[
      { from: 1, to: 2 },
      { from: 1, to: 5 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 1, to: 6 },
      { from: 1, to: 8 },
      { from: 5, to: 7},
      { from: 3, to: 9 },
      { from: 4, to: 10 },
      { from: 11, to: 4 },
      { from: 10, to: 12 },
      { from: 6, to: 12 }
    ]*/
  };
  /*var nodes =new vis.DataSet([
    {
      id: 1, label: "Router 1", title:PreTitle("ghh\n nnn"), shape:"circle",shadow:true
    }
  ])*/
  let options = {
    layout: {
        //hierarchical: false
    },
   //defaultOptions:{zoomControl:false},
    //autoResize: false,
    edges: {
       // smooth: false,
        color: {hover:
            "red"
        },
        width: 0.5,
        arrows: {
          to: {
            enabled: false,
           // scaleFactor: 0.5
          }
        }
      },
      height:"600px",
      interaction :{
          hover :true,
          zoomView: false
      },
      physics:false,
  //manipulation:{enabled:true}
  manipulation: {
    enabled: false,
    //initiallyActive: false,
    
  
  }

    };

    
  const events = {
    select: function(events) {
      var { nodes, edges } = events;
    }
  };

  const Eventss = {
    selectEdge:(event)=>{
      var { nodes, edges } = event;
      if (nodes.length ==1){

        <>
         
         <Paper elevation={10} style={{color:"yellowgreen"}}>
          <MenuList>
                  <MenuItem>Device Name:<button class='abb'>{Devi[nodes].label}</button></MenuItem>
                  <MenuItem><img src ={`/${Devi[nodes].image}`} alt="v"/></MenuItem>
                  <MenuItem>Device Interface:<button class='abcd'>{Devi[nodes].title}</button></MenuItem>
                  <MenuItem>Device Location:<button class='abcde'>{Devi[nodes].x}{Devi[nodes].y}</button></MenuItem>
                  
                  {/*<MenuItem style={{whiteSpace: 'normal'}} >
                      <Typography  style={{width:"30%" , wordWrap:"break-word"}}>
                          device Connectivity:{Devi[nodes].connect_to}
                      </Typography>
                      
      </MenuItem> */}
              
          
              
              
              
          </MenuList>
        </Paper>
        </>
       
        //top:"0",left:"1000", bottom:"0",
       // console.log(Devi[nodes].title)
      }

    }
  }
  return (
    <div style={{position:"absolute",top:"57em",zIndex:"1"}}>
      <div style={{display:"flex"}}>
      <div style={{/*display:"inline-block",*/ marginRight:"50px",maxWidth:"20vw"}}>
      {graphnode &&<>
             
             <Paper elevation={10} style={{backgroundColor:"orange" ,borderRadius:"30px" ,/*width:"60%" ,*/ /*border: `4px dashed ${red[500]}`paddingLeft:"20px",*/
                           textShadow:'2px 2px 5px green', boxShadow:"20px 20px lightpink", /*transformOrigin:{vertical:"top",horizontal:"right"}*/}}>
               <MenuList>
                   
                   <MenuItem>Device Name:<button class='abb'>{graphnode.label}</button></MenuItem>
                   <MenuItem><img src ={`/${graphnode.image}`} width="100px" height="100px" alt="v"/></MenuItem>
                   {/*<MenuItem >Device Interface:<br/><br/>{graphnode.title.split("\n").map(str => <p>{str}</p>)}</MenuItem>*/}
                   {<MenuItem style={{whiteSpace: 'normal'}} >
                   <button class="abcd">Device Interface:</button>
                       <Typography  style={{width:"50%" , wordWrap:"break-word"}}>
                           {graphnode.title}
                       </Typography>
                       
      </MenuItem>}
                   {/*<MenuItem >Device Interface:<br/>{graphnode.title}</MenuItem>*/}
                   <MenuItem><button class="aaaa">Device Location:</button>{graphnode.x},{graphnode.y}</MenuItem>
                   {<MenuItem style={{whiteSpace: 'normal'}} >
                   <button class="abcde">Device Description:</button>

                       <Typography  style={{width:"80%" , wordWrap:"break-word"}}>
                           <Button>{graphnode.device_description}</Button>
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
        <div style={{/*display:"inline-block",*/maxWidth:"80vw"}}>
        <Graph 
      graph={graph}
      options={options}
      events={{
        selectEdge:(event)=>{
          var { nodes, edges } = event;
          if (nodes.length ==1){
            setGraphNode(Devi[nodes-1])

           
           
            
           // console.log(Devi[nodes].title)
          }

        }
      }}
      getNetwork={network => {
      
        
          
      }}
      />

        </div>
      {/*graphnode &&<>
             
             <Paper elevation={10} style={{backgroundColor:"orange" ,borderRadius:"50px" ,width:"60%" , border: `4px dashed ${red[500]}`paddingLeft:"200px",
                           textShadow:'2px 2px 5px green', boxShadow:"20px 20px lightpink", transformOrigin:{vertical:"top",horizontal:"right"}}}>
               <MenuList>
                   
                   <MenuItem>Device Name:<button class='abb'>{graphnode.label}</button></MenuItem>
                   <MenuItem><img src ={`/${graphnode.image}`} alt="v"/></MenuItem>
                   <MenuItem >Device Interface:<button class='abcd'>{graphnode.title}</button></MenuItem>
                   <MenuItem>Device Location:<button class='abcde'>{graphnode.x},{graphnode.y}</button></MenuItem>
                   <MenuItem>Device Description:<button class='aaaa'>{graphnode.device_description}</button></MenuItem>
                   
                   {<MenuItem style={{whiteSpace: 'normal'}} >
                       <Typography  style={{width:"50%" , wordWrap:"break-word"}}>
                           Device Description:{graphnode.device_description}
                       </Typography>
                       
      </MenuItem> }
                   
               
                   
                   
                   
               </MenuList>
             </Paper>
        </>*/}
      {/*<Graph 
      graph={graph}
      options={options}
      events={{
        selectEdge:(event)=>{
          var { nodes, edges } = event;
          if (nodes.length ==1){
            setGraphNode(Devi[nodes-1])

           
           
            
           // console.log(Devi[nodes].title)
          }

        }
      }}
      getNetwork={network => {
      
        
          
      }}
      />*/}

      </div>
      
      
    </div>
    
  );
}

export default NewNetwork;
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
 
function PreTitle(text){
  const container =document.createElement("pre");
  container.innerText =text;
  return container;
}




function NewNetworkA() {

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
    
    autoResize: false,
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
      height:"900px",
      interaction :{
          hover :true
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

  
  return (
    <div>
      <div>
     
      <Graph 
      graph={graph}
      options={options}
      events={events
       

           
           
            
           // console.log(Devi[nodes].title)
        
      }
      getNetwork={network => {
      
        
          
      }}
      />

      </div>
      <div>
      
      </div>
      
    </div>
    
  );
}

export default NewNetworkA;
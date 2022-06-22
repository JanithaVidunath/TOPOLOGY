import React from "react";
//import vis from "react-graph-vis";
import vis from "react-vis";


import Graph from "react-graph-vis";
//import PreTitle from "./Pretitle";
//import preTitle from "./Pretitle";
 
//import "./styles.css";
// need to import the vis network css in order to show tooltip
//import "./network.css";
 
function PreTitle(text){
  const container =document.createElement("pre");
  container.innerText =text;
  return container;
}



function NewTopology() {
  const graph = {
    nodes: [
      { id: 1, label: "Router 1", title:'interface Ge0/1,interface Ge0/2,interface Ge0/3', shape:"circle",shadow: true ,color:{hover:"red"}},
      { id: 2, label: "Router 2", title: "interface Ge0/1,interface Ge0/2" ,shape:"circle",shadow:true,color:{hover:"red"}},
      { id: 3, label: "Switch 1", title: "" ,shape:"circle" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 4, label: "Switch 2", title: "",shape:"circle" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 5, label: "Switch 3", title: "" ,shape:"circle" ,shadow:true ,color:{background:"yellow",hover:"orange"}},
      { id: 6, label: "Router 3", title: "interface Ge0/1" ,shape:"circle",shadow:true,color:{hover:"red"} },
      { id: 7, label: "Router 4", title: "interface Ge0/1,interface Ge0/2,interface Ge0/4,interface Ge0/4",shape:"circle",shadow:true,color:{hover:"red"} },
      { id: 8, label: "Router 5", title: PreTitle("interface Ge0/1\ninterface Ge0/2\ninterface Ge0/3\ninterface Ge0/4") ,shape:"circle",fixed:true ,shadow:true,color:{hover:"red"} },
      { id: 9, label: "Switch 4", title: "" ,shape:"circle" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 10, label: "Switch 5", title: "" ,shape:"circle" ,shadow:true,color:{background:"yellow",hover:"orange"} },
      { id: 11, label: "Switch 6", title: "",shape:"circle",shadow:true ,color:{background:"yellow",hover:"orange"}},
      { id: 12, label: "Router6", title: "interface Ge0/1",shape:"circle",shadow:true ,color:{hover:"red"}}
      
    
    ],
    edges: [
      { from: 1, to: 2 , title:"interface Ge0/1,interface Ge0/1" ,smooth:{enabled:true,type:"curvedCW"}},
      { from: 1, to: 5,smooth:{enabled:true,type:"cubicBezier"} },
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
    ]
  };
  /*var nodes =new vis.DataSet([
    {
      id: 1, label: "Router 1", title:PreTitle("ghh\n nnn"), shape:"circle",shadow:true
    }
  ])*/
  const options = {
    layout: {
      //hierarchical: true
     // improvedLayout:true
    },
    interaction:{hover:true},
    manipulation:{enabled:false},
    edges: {
      color:{hover:"red"}
    },
    height: "500px",
    physics:false
  };
    
  const events = {
    select: function(events) {
      var { nodes, edges } = events;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        
     }}
    />
  );
}

export default NewTopology;
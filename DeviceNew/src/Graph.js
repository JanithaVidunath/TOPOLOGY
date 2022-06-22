import React from 'react';
import './index.css';
import vis from 'vis';
import PreTitle from './Pretitle';

var nodes = new vis.DataSet();
    nodes.add([
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
      
    ]);
    
var edges = new vis.DataSet();
    edges.add([
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
    ]);    
    
let graph = {
    		  nodes: nodes,
    		  edges: edges
    		};

let options = {
    		    layout: {
    		        hierarchical: false
    		    },
            physics:false,
    		    autoResize: false,
    		    edges: {
    		        smooth: false,
    		        color: '#000000',
    		        width: 0.5,
    		        arrows: {
    		          to: {
    		            enabled: true,
    		            scaleFactor: 0.5
    		          }
    		        }
    		      },
    		      interaction :{
    		    	  hover :true
    		      },
              //manipulation:{enabled:true}
              manipulation: {
               addNode: function (data, callback) {
                 // filling in the popup DOM elements
                 document.getElementById("operation").innerText = "Add Node";
                 document.getElementById("node-id").value = data.id;
                 document.getElementById("node-label").value = data.label;
                 data.shape = "circle";
                 document.getElementById("saveButton").onclick = saveData.bind(
                   this,
                   data,
                   callback
                 );
                 document.getElementById("cancelButton").onclick = clearPopUp.bind();
                 document.getElementById("network-popUp").style.display = "block";
               },
               editNode: function (data, callback) {
                 // filling in the popup DOM elements
                 document.getElementById("operation").innerText = "Edit Node";
                 document.getElementById("node-id").value = data.id;
                 document.getElementById("node-label").value = data.label;
                 document.getElementById("saveButton").onclick = saveData.bind(
                   this,
                   data,
                   callback
                 );
                 document.getElementById("cancelButton").onclick = cancelEdit.bind(
                   this,
                   callback
                 );
                 document.getElementById("network-popUp").style.display = "block";
               },
            }

    		};


let events = {
    		    select: function(event) {
    		        var { nodes, edges } = event;
    		        console.log("Selected nodes:");
    		        console.log(nodes);
    		        console.log("Selected edges:");
    		        console.log(edges);
    		    }
    		}
function clearPopUp() {
document.getElementById("saveButton").onclick = null;
document.getElementById("cancelButton").onclick = null;
document.getElementById("network-popUp").style.display = "none";
}

function cancelEdit(callback) {  
clearPopUp();
callback(null);
}

function saveData(data, callback) {
data.id = document.getElementById("node-id").value;
data.label = document.getElementById("node-label").value;
clearPopUp();
callback(data);
}   		
class Networkss extends React.Component{
		constructor(props){
			super(props);
			this.state = {
					graph : graph,
			};
		}
		
		componentDidMount(){
			var container =  this.refs.nw;
			console.log(graph.nodes);
			var network = new vis.Network(container, graph, options);
		}
		
		render(){
			return (<div>
           
				
			
				
			 <div ref="nw" style={{width:'100%' , height: '480px'}}/>
			 </div>);
		}
	}
export default Networkss;
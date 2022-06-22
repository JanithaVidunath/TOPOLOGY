import React from 'react';
import './index.css';
import vis from 'vis';
import PreTitle from './Pretitle';
import {useState} from 'react';
import {useEffect} from 'react';
import { useRef } from 'react';
import Devi from './node&edges.json'
 
/*function PreTitle(text){
  const container =document.createElement("pre");
  container.innerText =text;
  return container;
}*/




function New_network() {

    const [listnode, setListnode] = useState([]);
    const [listedge, setListedge] = useState([]);
	const myref =useRef(null);
    //const appendList={}
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

	var nodes = new vis.DataSet();
		nodes.add([
			{ id: 1, label: "Router 1",x:0,y:0, title:'interface Ge0/1,interface Ge0/2,interface Ge0/3', shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow: true ,color:{hover:"red"}},
			{ id: 2, label: "Router 2", title: "interface Ge0/1,interface Ge0/2" , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true,color:{hover:"red"}},
			{ id: 3, label: "Switch 1", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 4, label: "Switch 2", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 5, label: "Switch 3", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true ,color:{background:"yellow",hover:"orange"}},
			{ id: 6, label: "Router 3", title: "interface Ge0/1" , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 7, label: "Router 4", title: "interface Ge0/1,interface Ge0/2,interface Ge0/4,interface Ge0/4", shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true,color:{hover:"red"} },
			{ id: 8, label: "Router 5", title: PreTitle("interface Ge0/1\ninterface Ge0/2\ninterface Ge0/3\ninterface Ge0/4") , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 9, label: "Switch 4", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 10, label: "Router 7", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 11, label: "Router 8", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true ,color:{hover:"red"}},
			{ id: 12, label: "Router 6", title: "interface Ge0/1",  shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true ,color:{hover:"red"}}
			
		]);
		
	var edges = new vis.DataSet();
		edges.add([
		{ from: 1, to: 2 , title:"interface Ge0/1,interface Ge0/1" ,/*smooth:{enabled:true,type:"curvedCW"}*/},
		{ from: 1, to: 5,/*smooth:{enabled:true,type:"cubicBezier"} */},
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
					
					autoResize: false,
					edges: {
						smooth: false,
						color: {hover:
							"red"
						},
						width: 0.5,
						arrows: {
						to: {
							enabled: false,
							scaleFactor: 0.5
						}
						}
					},
					interaction :{
						hover :true
					},
					physics:false,
				//manipulation:{enabled:true}
				manipulation: {
					enabled: true,
					//initiallyActive: false,
					addNode: function(nodeData,callback) {
						nodeData.shape = 'circle';
						
						callback(nodeData);
					},
					addEdge: true,
					editNode: undefined,
					editEdge: true,
					deleteNode: true,
					deleteEdge: true,
					controlNodeStyle:{
					shape:"circle"
					}
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

   useEffect(()=>{
	var nodes = new vis.DataSet();
		nodes.add([
			{ id: 1, label: "Router 1",x:0,y:0, title:'interface Ge0/1,interface Ge0/2,interface Ge0/3', shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow: true ,color:{hover:"red"}},
			{ id: 2, label: "Router 2", title: "interface Ge0/1,interface Ge0/2" , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true,color:{hover:"red"}},
			{ id: 3, label: "Switch 1", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 4, label: "Switch 2", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 5, label: "Switch 3", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true ,color:{background:"yellow",hover:"orange"}},
			{ id: 6, label: "Router 3", title: "interface Ge0/1" , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 7, label: "Router 4", title: "interface Ge0/1,interface Ge0/2,interface Ge0/4,interface Ge0/4", shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true,color:{hover:"red"} },
			{ id: 8, label: "Router 5", title: PreTitle("interface Ge0/1\ninterface Ge0/2\ninterface Ge0/3\ninterface Ge0/4") , shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 9, label: "Switch 4", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.26.26.jpeg" ,shadow:true,color:{background:"yellow",hover:"orange"} },
			{ id: 10, label: "Router 7", title: "" ,shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true,color:{hover:"red"} },
			{ id: 11, label: "Router 8", title: "",shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg" ,shadow:true ,color:{hover:"red"}},
			{ id: 12, label: "Router 6", title: "interface Ge0/1",  shape:"image",image:"WhatsApp Image 2022-03-23 at 13.25.21.jpeg",shadow:true ,color:{hover:"red"}}
			
		]);
		
	var edges = new vis.DataSet();
		edges.add([
		{ from: 1, to: 2 , title:"interface Ge0/1,interface Ge0/1" ,/*smooth:{enabled:true,type:"curvedCW"}*/},
		{ from: 1, to: 5,/*smooth:{enabled:true,type:"cubicBezier"} */},
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
			
			autoResize: false,
			edges: {
				smooth: false,
				color: {hover:
					"red"
				},
				width: 0.5,
				arrows: {
				to: {
					enabled: false,
					scaleFactor: 0.5
				}
				}
			},
			interaction :{
				hover :true
			},
			physics:false,
		//manipulation:{enabled:true}
		manipulation: {
			enabled: true,
			//initiallyActive: false,
			addNode: function(nodeData,callback) {
				nodeData.shape = 'circle';
				
				callback(nodeData);
			},
			addEdge: true,
			editNode: undefined,
			editEdge: true,
			deleteNode: true,
			deleteEdge: true,
			controlNodeStyle:{
			shape:"circle"
			}
		}

		};
		var container = myref.current && myref.current.focus();
       // var container =  myref.current.focus();
       // console.log(graph.nodes);
        var network = new vis.Network(container, graph, options);
       
    },[])
    return (<div>
				
			
				
		<div inputRef={myref} style={{width:'100%' , height: '480px'}}/>
		</div>);

/*class Networkimage extends React.Component{
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
		
		render(){*/
   /* var container =  this.refs.nw;
    console.log(graph.nodes);
    var network = new vis.Network(container, graph, options);*/
			//return (
				
			
				
		//	 <div ref="nw" style={{width:'100%' , height: '480px'}}/>
			// );
		//}
	}
export default New_network;
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import GoogleTable from './GoogleTable';
//import New from './newww';
import MapWrapped from './GoogleTable';
import MAPSSS from './GoogleTable';
import MAPSSS2 from './GoogleTable2';
import Network from './Topology';
import NewNetwork from './ImageGraphJson';
import MAPSSS3 from './StateMap';
import { Container } from '@material-ui/core';
import MAPSSS4 from './StateMapNew';
import MAPSSS5 from './StateMapNewDup';
import MAPSSS6 from './GoogleMapNewState';
import MAPSSS7 from './GoogleMapTopology';
import React, { useState } from 'react';
import { useEffect } from 'react';
//import MAPSSSold from './StateMapOld';




//const rowSelect =Devi.slice(0,14)    

const DisplayCCT=()=>{
        const [state,setState] =useState();
        const [selectedDevices, setSelectedDevices] = useState(null);
   
    useEffect(() => {
         getInstances("l3vpn_cct_id")
        .then((data)=>{
            setSelectedDevices(data)
            console.log(selectedDevices)
            console.log(data)
        })

        
     } , []);

    async function getInstances (entity_name){
       // var {id}=useParams()
    const requestOptions = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
    };
    return fetch(`http://localhost:9000/get_instances?entity_name=${entity_name}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    return data.instances
    })
    .catch((reason) => {
    console.log(reason)
    return reason });
    }
  

        const history =useHistory();
        const location = useLocation(); 
        console.log("abc")
        const clickMe=(id)=>{
            history.push(`${location.pathname}/${id}`)
            console.log(history)
            setState(id)
        } 
        
        return(
            <div style={{padding:20}}>
                
                <Paper style= {{width:"100%"}} elevation={10} >
                    <TableContainer >
                        <Table >
                            <TableHead>
                                
                                <TableRow  >
                                
                                    <TableCell style={{backgroundColor:"lightblue"}} align ="center">Circuit ID</TableCell>
                                    <TableCell  style={{backgroundColor:"yellow"}} align="center">RT Pair</TableCell>
                                    <TableCell  style={{backgroundColor:"green"}} align="center">Type</TableCell>
                                    <TableCell  style={{backgroundColor:"orange"}} align="center">UUID</TableCell>
                                    
        
                                </TableRow>
                            </TableHead>  
                            <TableBody>
                                {selectedDevices && selectedDevices.map((disData)=>{
                                    return (
                                        <>
                                        {//onClick={(id)=>clickMe(disData.UUID)}
                                        }
                                            <TableRow onClick={(id)=>clickMe(disData.rt_pair)} >
                                                <TableCell align ="center" >{disData.cct_id}</TableCell>
                                                <TableCell align ="center" >{disData.rt_pair}</TableCell>
                                                <TableCell align ="center" >{disData.type}</TableCell>
                                                <TableCell align="center">{disData.UUID}</TableCell>
                                               
                                            </TableRow>
                                            {/*for (let i in {disData.device_lan};){
                                                for (let j in {disData.device_long};){
                                                    <GoogleTable lat={parseFloat(i)} lng ={parseFloat(j)}/>

                                                }
                                            }*/} 
                                            {/*<GoogleTable lat={disData.device_lan} lng ={disData.device_long}/>*/}
                                            
                                        </>
                                         
                                    )

                                })}
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                      
                </Paper>
                  {/*for (let i in {Devi.device_lan};){
                        for (let j in {Devi.device_long};){
                            <GoogleTable lat={parseFloat(i)} lng ={parseFloat(j)}/>

                        }
            <div>                                }*/} 
            {/*<div  > 

                 {<MAPSSS7/>
                 }
                 {<NewNetwork /> }
                 {<button onClick={handlers.upScale}>Zoom in</button>}
                 {<button onClick={handlers.downScale}>Zoom out</button>}
            </div>
            */
           }
            
                 
                        
                   
            </div>
        )
}

export default DisplayCCT;

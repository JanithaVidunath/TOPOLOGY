//import Devi from './NetworkTopology.json';
import React, { useState } from 'react';
import { useEffect } from 'react';
//import image from './assests/Screenshot 2022-01-30 103132.png';
/*const Abc=()=>{
        return (
        <div >{console.log(devi)}</div>
    )
}
export default Abc;*/
/*function Display(){
    const Data =devi.map((disData) =>{
        return(
            <tr>
                <td><img src="/project/src/assests/Screenshot 2022-01-30 103132.png" alt="fff"  /></td>
                <td>{disData.device_name}</td>
                <td>{disData.catagory}</td>
                <td>{disData.UUID}</td>
                <td>{disData.device_status}</td>
                
            </tr>
        )
    })
    return(
        <div>
            <table class ="table1">
                <thead>
                    <tr id= "headers">
                        <th><b>Device Logo</b></th>
                        <th><b>Device Name</b></th>
                        <th><b>Device Catagory</b></th> 
                        <th><b>Device ID</b></th>
                        <th><b>Device Status</b></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Data}
                </tbody>
            </table>
        </div>
    )
}
export default Display;*/

/*import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const rowSelect =Devi.slice(0,14)    

const Display2=()=>{
        const [state,setState] =useState();
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
                <Paper style= {{width:"100%"}} elevation={3} color="black">
                    
                    <Button variant="contained" color="purple">Device Name</Button>
                    <Button variant="contained" color="primary">Device Catagory</Button>
                    <Button variant="contained" color="secondary">Device ID</Button>
                    <Button variant="contained" color="inherit">Device Status</Button>
                </Paper>
                <Paper style= {{width:"80%"}} elevation={10} >
                    <TableContainer >
                        <Table >
                            <TableHead>
                                
                                <TableRow  >
                                
                                    <TableCell align ="center">Device Name</TableCell>
                                    <TableCell align="center">Device Catagory</TableCell>
                                    <TableCell align="center">Device ID</TableCell>
                                    <TableCell align="center">Device Status</TableCell>
        
                                </TableRow>
                            </TableHead>  
                            <TableBody>
                                {rowSelect.map((disData)=>(
                                    <TableRow onClick={(id)=>clickMe(disData.UUID)}>
                                    <TableCell align ="center" >{disData.device_name}</TableCell>
                                    <TableCell align ="center" >{disData.catagory}</TableCell>
                                    <TableCell align ="center">{disData.UUID}</TableCell>
                                    <TableCell align ="center">{disData.device_status}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                       
                    </Paper>
                        
                   
            </div>
        )
}

export default Display2;*/







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
//import MAPSSSold from './StateMapOld';




//const rowSelect =Devi.slice(0,14)    

const DisplayDB=()=>{
        const [state,setState] =useState();
        const [selectedDevices, setSelectedDevices] = useState(null);
   
    useEffect(() => {
         getInstances("device")
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
                                
                                    <TableCell style={{backgroundColor:"blue"}} align ="center">Device Name</TableCell>
                                    <TableCell  style={{backgroundColor:"red"}} align="center">Device Catagory</TableCell>
                                    <TableCell  style={{backgroundColor:"green"}} align="center">Device Status</TableCell>
                                    <TableCell  style={{backgroundColor:"purple"}} align="center">Mgmt ip</TableCell>
                                    <TableCell  style={{backgroundColor:"yellow"}} align="center">Device ID</TableCell>
                                    <TableCell  style={{backgroundColor:"orange"}} align="center">Created By</TableCell>
                                    <TableCell  style={{backgroundColor:"purple"}} align="center">Modified By</TableCell>
        
                                </TableRow>
                            </TableHead>  
                            <TableBody>
                                {selectedDevices && selectedDevices.map((disData)=>{
                                    return (
                                        <>
                                        {//onClick={(id)=>clickMe(disData.UUID)}
                                        }
                                            <TableRow onClick={(id)=>clickMe(disData.UUID)} >
                                                <TableCell align ="center" >{disData.instance_name}</TableCell>
                                                <TableCell align ="center" >{disData.category}</TableCell>
                                                <TableCell align ="center" >{disData.device_status}</TableCell>
                                                <TableCell align="center">{disData.mgmt_ip?disData.mgmt_ip:"-"}</TableCell>
                                                <TableCell align ="center">{disData.UUID}</TableCell>
                                                <TableCell align ="center">{disData.created_by}</TableCell>
                                                <TableCell align ="center">{disData.last_modified_by}</TableCell>
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

export default DisplayDB;

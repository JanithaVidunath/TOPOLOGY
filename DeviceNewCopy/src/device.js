import Devi from './device_insync.json';
import React, { useState } from 'react';
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
import New from './newww';
import MapWrapped from './GoogleTable';
import MAPSSS from './GoogleTable';
import MAPSSS2 from './GoogleTable2';
import Network from './Topology';
import NewNetwork from './ImageGraphJson';
import MAPSSS3 from './StateMap';




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
                                {rowSelect.map((disData)=>{
                                    return (
                                        <>
                                            <TableRow onClick={(id)=>clickMe(disData.UUID)}>
                                                <TableCell align ="center" >{disData.device_name}</TableCell>
                                                <TableCell align ="center" >{disData.catagory}</TableCell>
                                                <TableCell align ="center">{disData.UUID}</TableCell>
                                                <TableCell align ="center">{disData.device_status}</TableCell>
                                            </TableRow>
                                            {/*for (let i in {disData.device_lan};){
                                                for (let j in {disData.device_long};){
                                                    <GoogleTable lat={parseFloat(i)} lng ={parseFloat(j)}/>

                                                }
                                            }*/} 
                                            {/*<GoogleTable lat={disData.device_lan} lng ={disData.device_long}/>*/}
                                            {console.log("mm")}
                                        </>
                                         
                                    )

                                })}
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                {console.log("m")}       
                </Paper>
                  {/*for (let i in {Devi.device_lan};){
                        for (let j in {Devi.device_long};){
                            <GoogleTable lat={parseFloat(i)} lng ={parseFloat(j)}/>

                        }
                                            }*/} 
                 <MAPSSS3/>
                 
                        
                   
            </div>
        )
}

export default Display2;

import Devi from './NetworkTopology.json';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';


function Display(){
    const [selectedDevices, setSelectedDevices] = useState(null);
   
    useEffect(() => {
         getInstances("devices")
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

    
    return(
        <div style={{width:"100%"}}> 
                {selectedDevices &&  selectedDevices.map((disData)=>(
                    <Paper elevation={10} >
                        <MenuList>
                            <MenuItem><img src ={disData.image} width="100px" height="100px"/></MenuItem>
                            <MenuItem>Device Name:<button class='abb'>{disData.device_name}</button></MenuItem>
                            <MenuItem>Device Catagory:<button class='abcd'>{disData.catagory}</button></MenuItem>
                            <MenuItem>Device ID:<button class='abcde'>{disData.UUID}</button></MenuItem>
                            <MenuItem >Device Status:<button class='aaaa'>{disData.device_status}</button></MenuItem>
                            
                            <MenuItem style={{whiteSpace: 'normal'}} >
                                <Typography  style={{width:"30%" , wordWrap:"break-word"}}>
                                    device Description:{disData.device_description}
                                </Typography>
                                
                            </MenuItem>   
                                
                            
                            
                            
                        </MenuList>
                    </Paper>
                ))}
            
        </div>
    )
}
export default Display;

import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Device_GoogleMaps from "./Device_GoogleMap"


var x= '';
var y='';
console.log("aab")
    
const DisplayRT=()=>{
    const [selectedDevices, setSelectedDevices] = useState(null);
    const {id}=useParams();
    useEffect(() => {

         getInstances("domain_vrf",id,"rt_pair")
        .then((data)=>{
            setSelectedDevices(data)
            console.log(selectedDevices)
            console.log(data)
        })

        
     } , []);

    async function getInstances (entity_name,id,field){
       // var {id}=useParams()
    const requestOptions = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
    };
    return fetch(`http://localhost:9000/get_instance_?entity_name=${entity_name}&id=${id}&field=${field}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    return data.instances
    })
    .catch((reason) => {
    console.log(reason)
    return reason });
    }


    const ab= 5;
    //const {id}=useParams();
    console.log({id})
    //console.log("hear")
    return(
        <div style={{width:"100%"}}>
            
            {//selectedDevices?console.log(selectedDevices):''
            }
                {selectedDevices && selectedDevices.map((disData)=>{
                     x =disData.device_lan;
                     y =disData.device_long;
                    return(
                        <>
                        
                        <Paper elevation={10} >
                            <MenuList>
                                
                                {/*console.log(disData.image)*/}
                                {console.log(disData.device_name)}
                                <MenuItem>Device Name:<button class='abb'>{disData.instance_name}</button></MenuItem>
                                <MenuItem>Device Catagory:<button class='abcd'>{disData.category}</button></MenuItem>
                                {<MenuItem>Device mgmt_ip:<button class='abcde'>{disData.mgmt_ip?disData.mgmt_ip:"no ip address"}</button></MenuItem>
                                }
                                {<MenuItem >Device Status :<button class='aaaa'>{disData.device_status}</button></MenuItem>
                                }
                                
                               
                                 
                            
                                
                                
                                
                            </MenuList>
                        </Paper>
                        {console.log(x)}
                        {console.log(typeof(x))}
                        {//<Device_GoogleMaps lat={parseFloat(x)} lng ={parseFloat(y)}/>
                        }
                    </>

                    )
                   
                    
                })}
        </div>
    )
}





export  {DisplayRT,x,y};
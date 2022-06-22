import Devi from './device_insync.json';
import React from 'react';

import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Device_GoogleMaps from "./Device_GoogleMap"


var x= '';
var y='';
console.log("aab")
    
const Display3=()=>{
    const ab= 5;
    const {id}=useParams();
    console.log({id})
    console.log("hear")
    return(
        <div style={{width:"100%"}}>
                {Devi.filter((val)=>{
                    if (val.UUID==id){
                        return val
                    
                   }

                }).map((disData)=>{
                     x =disData.device_lan;
                     y =disData.device_long;
                    return(
                        <>
                        
                        <Paper elevation={10} >
                            <MenuList>
                                <MenuItem><img src ={`/${disData.image}`} alt="v"/></MenuItem>
                                {/*console.log(disData.image)*/}
                                {console.log(disData.device_name)}
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
                        {console.log(x)}
                        {console.log(typeof(x))}
                        <Device_GoogleMaps lat={parseFloat(x)} lng ={parseFloat(y)}/>
                    </>

                    )
                   
                    
                })}
        </div>
    )
}





export  {Display3,x,y};
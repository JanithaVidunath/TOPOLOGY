import Devi from './device_insync.json';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


function Display(){
    
    return(
        <div style={{width:"100%"}}> 
                {Devi.map((disData)=>(
                    <Paper elevation={10} >
                        <MenuList>
                            <MenuItem><img src ={disData.image}/></MenuItem>
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

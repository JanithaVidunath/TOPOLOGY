import express from "express";
import { db } from "./index.js";




import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
//const router1  = express.Router();
/*router.get('/get_instance', async (req, res) => {



    const entity_name = req.query.entity_name;
   // const id = req.query.id;
    
    console.log(`Request all instances of ${entity_name}`);
    
    
    
    try{
    //console.log("a")
    const instances = []
    //const instance = db.db.collection(entity_name).find({},{"device_name":1,"title":1,"device_lan":1,"device_long":1});
    //const instance = db.db.collection(entity_name).find({device_name:"R1"});
    //const instance = db.db.collection(entity_name).find({}).project({"UUID":id});

    const instance = db.db.collection(entity_name).find();
    //const instance = db.db.collection(entity_name).find({}).project({"device_name":1,"title":1,"device_lan":1,"device_long":1});
    await instance.forEach(function(item){
    instances.push(item)
    //console.log("a")
    })
    console.log(instance)
    res.status(200).json({
    status:true,
    instances:instances})
    }
    catch (err) {
    res.status(500).json({detail:"Error occured when accessing db"});
    }
    })*/
    //
    router.get('/get_instance', async (req, res) => {



        const entity_name = req.query.entity_name;
        const id = req.query.id;
        const field =req.query.field
        var filter = {}
        filter[field] = id
        
        console.log(`Request all instances of ${entity_name}`);
        console.log(filter)
        
        
        
        try{
        //console.log("a")
        const instances = []
        //const instance = db.db.collection(entity_name).find({},{"device_name":1,"title":1,"device_lan":1,"device_long":1});
        const instance = db.db.collection(entity_name).find(filter);
        //const instance = db.db.collection(entity_name).find({}).project({"UUID":id});
       // console.log(instance)
    
        //const instance = db.db.collection(entity_name).find();
        //const instance = db.db.collection(entity_name).find({}).project({"device_name":1,"title":1,"device_lan":1,"device_long":1});
        await instance.forEach(function(item){
        instances.push(item)
        //console.log("a")
        })
       // console.log(instance)
        res.status(200).json({
        status:true,
        instances:instances})
        }
        catch (err) {
        res.status(500).json({detail:"Error occured when accessing db"});
        }
        })

    
    router.get('/get_instances', async (req, res) => {



    const entity_name = req.query.entity_name;
    //const id = req.query.id;
    
    console.log(`Request all instances of ${entity_name}`);
    
    
    
    try{
    //console.log("a")
    const instances = []
    //const instance = db.db.collection(entity_name).find({},{"device_name":1,"title":1,"device_lan":1,"device_long":1});
    const instance = db.db.collection(entity_name).find();
    //const instance = db.db.collection(entity_name).find({}).project({"UUID":id});

    //const instance = db.db.collection(entity_name).find();
    //const instance = db.db.collection(entity_name).find({}).project({"device_name":1,"title":1,"device_lan":1,"device_long":1});
    await instance.forEach(function(item){
    instances.push(item)
    //console.log("a")
    })
    //console.log(instance)
    res.status(200).json({
    status:true,
    instances:instances})
    }
    catch (err) {
    res.status(500).json({detail:"Error occured when accessing db"});
    }
    })

    router.get('/get_instance_', async (req, res) => {



        const entity_name = req.query.entity_name;
        const id = req.query.id;
        const field =req.query.field
        var filter = {}
        filter[field] = id
        
        console.log(`Request all instances of ${entity_name}`);
       // console.log(filter)
        
        
        
        try{
        //console.log("a")
        const domain_vrf = []
        //const instance = db.db.collection(entity_name).find({},{"device_name":1,"title":1,"device_lan":1,"device_long":1});
        const instance = db.db.collection(entity_name).find(filter);
        //const instance = db.db.collection(entity_name).find({}).project({"UUID":id});
        //console.log(instance)
    
        //const instance = db.db.collection(entity_name).find();
        //const instance = db.db.collection(entity_name).find({}).project({"device_name":1,"title":1,"device_lan":1,"device_long":1});
        await instance.forEach(function(item){
        domain_vrf.push(item)
       console.log(item)
        
        
        
        
        })
        const vrf_lcl =[]
    console.log("*")
         for (let i=0 ;i<domain_vrf.length;i++){
            const instance1 = db.db.collection("vrf_local_test").find({"UUID":domain_vrf[i].vrf_local_id});
            await instance1.forEach(function(item){
                vrf_lcl.push(item)
                console.log(item)

            })}
            
        const device_ =[]
        for (let i=0 ;i<vrf_lcl.length;i++){
            //const instance2 = db.db.collection("device").find({"UUID":vrf_lcl[i].device_id});
            const instance2 = db.db.collection("device").find({"UUID":vrf_lcl[i].device_id});
            await instance2.forEach(function(item){
                device_.push(item)
                console.log(item)
            })


            
            
          }
       
        //console.log(instance)
        res.status(200).json({
        status:true,
       instances:device_
    })
        }
        catch (err) {
        res.status(500).json({detail:"Error occured when accessing db"});
        }
        })

    

    export default router;
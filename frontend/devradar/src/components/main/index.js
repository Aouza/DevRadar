import React, { useEffect, useState } from 'react';
import Form from '../form';
import Devs from '../devs';

import api from "../../service/api"

import "./style.css";

const Main = () => {


    const [ devs, setDevs ] = useState([]);

    useEffect(() => {
     async function loadDevs(){
        const response = await api.get("/devs");
        console.log("oi")
        setDevs(response.data);
     }  
     
     loadDevs();

    }, []) 

    async function handleAddDev(data){        
        const response = await api.post("/devs", data)

        setDevs([...devs, response.data]);
    }

return(

    <section className='container main'>
            <h1>DEVRADAR</h1>
        <div className="wrap-aplication">
            <Form onSubmit = {handleAddDev}></Form>
            <Devs devs={devs}></Devs>
        </div>
    </section>

)}

export default Main;
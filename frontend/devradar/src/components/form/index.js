import React, { useState, useEffect } from 'react';

import "./style.css";

const Form = ({onSubmit}) => {
    
const [longitude, setLongitude] = useState("");
const [latitude, setLatitude] = useState("");
const [user, setUser] = useState("");
const [techs, setTechs ] = useState("");

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {

           const { latitude, longitude } = position.coords;
           
            /*SETA OS VALORES ASSIM QUE O USUARIO ACEITA AS PERMISSOES*/
           setLatitude(latitude);
           setLongitude(longitude);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout: 30000,
        }

    );   
}, [])

async function handleSubmit(e){

    e.preventDefault();

    await onSubmit({
        user,
        techs,
        longitude, 
        latitude
    });

    setUser("");
    setTechs("");
}
    return(
        <aside className="container wrap-form">
        <form onSubmit={handleSubmit} >
            <input name="username" id="username" placeholder="username" value={user}
            onChange = {e => setUser(e.target.value)}/><br/>
            <input name="techs" id="techs" placeholder="tecnologias" value={techs} 
            onChange = {e => setTechs(e.target.value)}/><br/>
            <div className="wrap-locale">
                <input type="number" name="latitude" id="latitude" placeholder="latitude" value={latitude}
                onChange={e => setLatitude(e.target.value)}/>
                <input type="number" name="longitude" id="longitude" placeholder="longitude" value={longitude}
                onChange={e => setLongitude(e.target.value)}/>
            </div>
            <button className="btn-send">CADASTRAR</button>
        </form>
    </aside>
    )
}

export default Form;
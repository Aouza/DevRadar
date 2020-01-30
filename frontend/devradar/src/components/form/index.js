import React from 'react';

import "./style.css";

const Form = () => (
    <aside className="container wrap-form">
        <form onSubmit = "">
            <input name="username" id="username" placeholder="username"/><br/>
            <input name="techs" id="techs" placeholder="tecnologias"/><br/>
            <div className="wrap-locale">
                <input type="number" name="latitude" id="latitude" placeholder="latitude"/>
                <input type="number" name="longitude" id="longitude" placeholder="longitude"/>
            </div>
            <button className="btn-send">CADASTRAR</button>
        </form>
    </aside>
)

export default Form;
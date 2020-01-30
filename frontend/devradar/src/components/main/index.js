import React from 'react';
import Form from '../form';
import Devs from '../devs';

import "./style.css";

const Main = () => (
    <section className='container main'>
            <h1>DEVRADAR</h1>
        <div className="wrap-aplication">
            <Form></Form>
            <Devs></Devs>
        </div>
    </section>
)

export default Main;
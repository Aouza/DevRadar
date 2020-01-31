import React from 'react';

import "./style.css";

const Devs = (props) => {
    const { devs } = props;
    console.log(devs);
    return(
        <div className="container wrap-devs">
                <ul className="dev-list">
                    {devs.map(dev => (
                        <li key={dev._id} className="dev">
                            <div className="wrap-img-name">
                                <img src={dev.avatar_url} alt="Perfil"/>
                                <div className="wrap-info-name">
                                    <strong>{dev.nome}</strong>
                                    <span>{dev.techs}</span>
                                </div>
                            </div>
                            <p>{dev.bio}</p>
                            <a href={`https://github.com/${dev.user}`} target="_blank">Acessar o perfil do Github</a>
                        </li>
                    ))}

                </ul>
        </div>
    )
}

export default Devs;
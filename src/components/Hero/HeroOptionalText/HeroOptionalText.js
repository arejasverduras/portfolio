import React from 'react';
import { useSelector } from 'react-redux';
import { selectClients } from '../ClientSlice';

export const HeroOptionalText = (props) =>{
    const clients = useSelector(selectClients);
    
    
    return (
        <>
        <section className='optionalTextSection' id="heroOptionalText">
            <h2>What a legend!</h2>
            <p>And good looking too..</p>
        </section>
        <section className='optionalLogoSection' id="heroOptionalText">
                <h2>as trusted by</h2>
                <ul className='logoList'>
                    {clients.map((client, index) => 
                    <li key={index}>
                        <img src={client.logo}></img>
                        <h3>{client.name}</h3>
                        </li>
                    )}
                </ul>
        </section>
        </>
    )
}
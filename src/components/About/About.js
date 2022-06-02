import React from 'react';
import MichielHero from '../Hero/MichielHero.png';

export const About = (props) => {
    return (
        <>
            <h1 style={{"display":"none"}}>About</h1>
            <section className="aboutTopSection">
                 <img className="heroImage" src={MichielHero}></img>
                <div className='aboutPageSummary'>
                    <h2>Michiel Roukens</h2>
                    <p>Artist by heart, traveller by day, coder at night. 
                        Play music with the tunes of the universe.</p>
                </div>
            </section>
        </>
    )
}
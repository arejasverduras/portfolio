import React from 'react';
import MichielHero from '../Hero/MichielHero.png';
import { HeroOptionalText } from '../Hero/HeroOptionalText/HeroOptionalText';

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
            <section className='aboutTextSection'>
            <h3>Startup Founder turned Developer</h3>
               <div className='aboutExtraText'>
                <p>Extremely passionate about building 
                    beautifull, practical and smart things. 
                    Self-starting, highly determined, obsessively persistent.
                </p>
                <p>Having completed the Front-end section of the 
                    Full-Stack Career Course on codecademy, 
                    I am eager to practice my new found skills as a 
                    Front-end / React Developer.
                </p>
                <p> Open for a junior position or Freelance assignment. 
                    Remote / hybrid preferred. 
                    <br/>
                    Get in touch!
                </p>
                </div>
        </section>
        </>
    )
}
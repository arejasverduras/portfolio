import React from "react";
import MichielHero from './MichielHero.png';

export const Hero = (props) => {
    return (
        <div className="heroSection" >
            <img className="heroImage" src={MichielHero} alt="Michiel with his dog Arantxa on his shoulders"></img>
            <div className="heroTitleSection">
                <h1 className="heroTitle">Michiel Roukens</h1>
                <p className='heroSub'>Full-Stack Developer</p>
            </div>
        </div>
    )
}
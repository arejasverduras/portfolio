import React from "react";
import MichielHero from './MichielHero.png';
import MichielPortrait from './MichielPortrait.jpg'

export const Hero = (props) => {
    return (
        <div className="heroSection" >
            <img className="heroImage" src={MichielHero} alt="Michiel with his dog Arantxa on his shoulders"></img>
            {/* <img className="heroImage" src={MichielPortrait} alt="Michiel on the boulevard of scheveningen, lookin up"></img> */}

            <div className="heroTitleSection">
                <h1 className="heroTitle">Michiel Roukens</h1>
                <p className='heroSub'>Full-Stack Developer</p>
            </div>
        </div>
    )
}
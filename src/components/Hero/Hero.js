import {React, useEffect} from "react";
import MichielHero from './MichielHero.png';
import MichielPortrait from './MichielPortrait.jpg'
import { SpotLight } from "../SpotLight/SpotLight";

export const Hero = (props) => {
    const spotLightEl = document.querySelector("#SpotLight");


    useEffect(()=>{
        const spotLightEl = document.querySelector("#SpotLight");
    }, [])
    
    return (
        <div className="heroSection" >
            
            <img className="heroImage" src={MichielHero} alt="Michiel with his dog Arantxa on his shoulders"></img>
            {/* <img className="heroImage" src={MichielPortrait} alt="Michiel on the boulevard of scheveningen, lookin up"></img> */}

            <div className="heroTitleSection">
                <h1 className="heroTitle">Michiel Roukens</h1>
                <p className='heroSub'>Full-Stack Developer</p>
            </div>
            <SpotLight div={spotLightEl}/>
        </div>
    )
}
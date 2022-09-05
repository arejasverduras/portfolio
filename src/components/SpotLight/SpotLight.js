import {React, useEffect} from 'react';

export const SpotLight = () => {

    const handleMouseMove = (event) => {
        const {clientX, clientY} = event;
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 148px, #ffd083 150px)`;
    }

    useEffect(()=>{
        document.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
        }
    },)

    return (
        <div id="SpotLight">

        </div>
    )
}

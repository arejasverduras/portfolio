import {React, useEffect} from 'react';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

export const SpotLight = () => {

    const handleMouseMove = (event) => {
        const {clientX, clientY} = event;
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 148px, #ffd083 150px)`;
    }

    const handleClick = (event) => {
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.opacity = '0';
        document.removeEventListener("mousemove", handleMouseMove);
    }

    useEffect(()=>{
        document.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
        }
    },)

    useEffect(()=>{
        document.addEventListener("click", handleClick);
        
        return ()=>{
            document.removeEventListener('click', handleClick)
        }
    })

    return (
        <div id="SpotLight">

        </div>
    )
}

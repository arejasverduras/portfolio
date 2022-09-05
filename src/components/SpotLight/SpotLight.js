import {React, useEffect} from 'react';

export const SpotLight = () => {

    const handleMouseMove = (event) => {
        const {clientX, clientY} = event;
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 148px, #ffd083 150px)`;
    }

    const handleClick = (event) => {
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.animation = 'spotLightGrow 1s forwards';
        document.removeEventListener('click', handleClick)
        document.addEventListener('click', handleClick2);
        document.removeEventListener("mousemove", handleMouseMove);
    }

    const handleClick2 = (event) => {
        const spotLightEl = document.querySelector("#SpotLight");
        spotLightEl.style.animation = 'spotLightShrink 0.4s forwards';
        document.removeEventListener('click', handleClick2)
        document.addEventListener('click', handleClick);
        document.addEventListener("mousemove", handleMouseMove);
    }

    useEffect(()=>{
        document.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
        }
    },)

    useEffect(()=>{
        // document.removeEventListener('click', handleClick2)
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

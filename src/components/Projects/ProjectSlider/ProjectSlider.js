import React, {useState} from 'react';
//import BtnSlider from './BtnSlider

export const ProjectsSlider = ({projects})=>{
    //load an array with objects for the slider

    
    
    return (
        <div className="projectSlider">
            {/* generate a 'Slide' component for eacht object in the array */}
            {projects.map((obj, index) => {
                return (
                    <div>
                        <img
                        src={process.env.PUBLIC_URL + `/images/projectImages/sliderImages/image${index + 1}.png`} 
                        alt="slider"
                        />
                    </div>
                )
            })}
        </div>
    )
}
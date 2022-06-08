import React, {useState} from 'react';
import ProjectSliderBtn from './ProjectSliderBtn';
import { catLabels, catClassNamer } from '../projectsFeatures';

export const ProjectsSlider = ({projects})=>{
    //load an array with objects for the slider

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== projects.length) {
            setSlideIndex(slideIndex +1);
        } else if (slideIndex === projects.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1){
            setSlideIndex(slideIndex -1);
        } else if (slideIndex === 1){
            setSlideIndex(projects.length)
        }
    }
    
    return (
        <div className="projectSlider">
            {/* generate a 'Slide' component for eacht object in the array */}
            {projects.map((project, index) => {
                return (
                    <div 
                    key={index}
                    className={slideIndex === index + 1? "projectSlide active-anim": "projectSlide"}>
                        <img
                        src={process.env.PUBLIC_URL + `/images/projectImages/sliderImages/image${index + 1}.png`} 
                        alt="slider"
                        />
                        <div className='slideDescription'>
                            <h2>{project.name} || {project.client}</h2>

                        </div>
                    </div>
                )
            })}
            <ProjectSliderBtn moveSlide={prevSlide} direction={"prev"}/>
            <ProjectSliderBtn moveSlide={nextSlide} direction={"next"} />

        </div>
    )
}
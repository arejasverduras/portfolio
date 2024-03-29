import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProjectSliderBtn from './ProjectSliderBtn';
import { selectPlaceHolder } from '../ProjectsSlice';
import { catLabels, techLabels } from '../projectsFeatures';
import { Link } from 'react-router-dom';

export const ProjectsSlider = ({projects})=>{
    //load an array with objects for the slider
    const placeHolderImage = useSelector(selectPlaceHolder);
    const [slideIndex, setSlideIndex] = useState(1);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

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

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    useEffect(()=>{
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    },[slideIndex]);
    
    return (
        <div className="projectSlider">
            {/* generate a 'Slide' component for eacht object in the array */}
            {projects.map((project, index) => {
                return (
                    <div 
                    key={index}
                    className={slideIndex === index + 1? "projectSlide active-anim": "projectSlide"}>
                        <Link to={`/projects/${slideIndex}`}>
                        <img
                        // src={process.env.PUBLIC_URL + `/images/projectImages/sliderImages/image${index + 1}.png`} 
                        src={process.env.PUBLIC_URL + `${project.images[0] || placeHolderImage}`} 
                        alt="slider"
                        />
                        </Link>
                       <div className='slideDescription'>
                       <Link to={`/projects/${project.id}`}>
                            <h2 className='slideProjectTitle'>{project.name} || {project.client}</h2>
                            <p className={catLabels(project.cat)}>{project.cat}</p>
                <p className="projectTileDescription">{project.description}</p>
                </Link>
                            <ul className="projectTileTech">
                                {project.tech.map((tech, index) => (
                                    <li key={index} className={techLabels(tech)}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })}
            <ProjectSliderBtn moveSlide={prevSlide} direction={"prev"}/>
            <ProjectSliderBtn moveSlide={nextSlide} direction={"next"} />

            <div className='container-dots'>
                {Array.from({length: projects.length}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={()=> moveDot(index+1)}
                    className={slideIndex === index+1 ? "dot active": "dot"}>
                    </div>
                ))}
            </div>

        </div>
    )
}
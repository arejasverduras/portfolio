import React, {useState} from 'react';
import ProjectSliderBtn from '../../components/Projects/ProjectSlider/ProjectSliderBtn.js'

export const ImageSlider = ({images})=>{
    //load an array with images from props

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== images.length) {
            setSlideIndex(slideIndex +1);
        } else if (slideIndex === images.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1){
            setSlideIndex(slideIndex -1);
        } else if (slideIndex === 1){
            setSlideIndex(images.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }
    
    return (
        <div className="projectSlider">
            {/* generate a 'Slide' component for eacht object in the array */}
            {images.map((image, index) => {
                return (
                    <div 
                    key={index}
                    className={slideIndex === index + 1? "projectSlide active-anim": "projectSlide"}>
                        
                        <img
                        src={process.env.PUBLIC_URL + image} 
                        alt="slider"
                        />
                    </div>
                )
            })}
            <ProjectSliderBtn moveSlide={prevSlide} direction={"prev"}/>
            <ProjectSliderBtn moveSlide={nextSlide} direction={"next"} />

            <div className='container-dots'>
                {Array.from({length: images.length}).map((item, index) => (
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
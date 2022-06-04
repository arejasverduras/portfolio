import React from "react";

export const ProjectTile = ({project}) =>{
    const {name, description, tileImage, images, tech, cat} = project;
    
    /* example Project
    {
        id: 1,
        name: "Resume",
        description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
        images: [],
        tech: ['JavaScript', 'React', 'HTML', 'CSS'],
        cat: 'Front-end',
        type: 'Personal',
        demoLink: "https://arejasresume.surge.sh",
        sourceLink: "https://github.com/arejasverduras/resume"
    },
    */

    const techClassNamer = (tech) => tech ===  'JavaScript' ? 'techLabel techJS': 'techLabel'; 

    const techClassNamer2 = (tech) => {
        switch (tech) {
            case 'JavaScript':
                return 'techLabel techJS';
            case 'React':
                return 'techLabel techReact';
            case 'Redux': 
                return 'techLabel techRedux';
            case 'HTML':
                return 'techLabel techHTML'
            case 'CSS':
                return 'techLabel techCSS'
            default: 
            return 'techLabel'
        }
    }

    


    return ( 
        <div className="projectTile">
            <h3>{name}</h3>
            <img className="projectTileImage" src={tileImage} alt={name}></img>
            <p>{description}</p>
            <ul className="projectTileTech">
                {tech.map((tech, index) => (
                    <li key={index} className={techClassNamer2(tech)}>{tech}</li>
                ))}
            </ul>
            <p className="cat">{cat}</p>
        </div>
    )
}
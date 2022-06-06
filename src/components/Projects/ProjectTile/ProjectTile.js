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
    const techLabels = (tech) => `techLabel ${techClassNamer(tech)}`;

    const techClassNamer = (tech) => {
        switch (tech) {
            case 'JavaScript':
                return 'techJS';
            case 'React':
                return 'techReact';
            case 'Redux': 
                return 'techRedux';
            case 'HTML':
                return 'techHTML'
            case 'CSS':
                return 'techCSS'
            default: 
            return '';
        }
    }

    return ( 
        <div className="projectTile">
            <h3>{name}</h3>
            <img className="projectTileImage" src={tileImage} alt={name}></img>
            <p>{description}</p>
            <ul className="projectTileTech">
                {tech.map((tech, index) => (
                    <li key={index} className={techLabels(tech)}>{tech}</li>
                ))}
            </ul>
            <p className="cat">{cat}</p>
        </div>
    )
}
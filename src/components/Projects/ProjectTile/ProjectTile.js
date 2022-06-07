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

    const catLabels = (cat) => `catLabel ${catClassNamer(cat)}`;

    const catClassNamer = (cat) => {
        switch (cat) {
            case 'Front-End':
                return 'catFrontend'
            case 'Back-End':
                return 'catBackend'
            case 'Full-Stack':
                return 'catFullstack'
            case 'wordpress':
                return 'catWordpress'
            default: 
            return '';
        }
    }

    return ( 
        <article className="projectTile">
            
            <img className="projectTileImage" src={tileImage} alt={name}></img>
            <div className="projectTileContent">
                <h3 className="projectTileTitle">{name}</h3>
                <p className={catLabels(cat)}>{cat}</p>
                <p className="projectTileDescription">{description}</p>
            </div>
            <ul className="projectTileTech">
                    {tech.map((tech, index) => (
                        <li key={index} className={techLabels(tech)}>{tech}</li>
                    ))}
                </ul>
        </article>
    )
}
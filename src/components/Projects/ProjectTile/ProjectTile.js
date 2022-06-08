import React from "react";
import { catLabels, techLabels } from '../projectsFeatures';

export const ProjectTile = ({project}) =>{
    const {name, description, tileImage, images, tech, cat} = project;

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
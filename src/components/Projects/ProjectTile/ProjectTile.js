import React from "react";
import { catLabels, techLabels } from '../projectsFeatures';
import {
    Link
  } from "react-router-dom";

export const ProjectTile = ({project}) =>{
    const {id, name, description, tileImage, tech, cat} = project;

    return ( 

            <article className="projectTile">
                <Link to={`/projects/${id}`}>
                    <img className="projectTileImage" src={tileImage} alt={name}></img>
                </Link>
                <div className="projectTileContent">
                    <h3 className="projectTileTitle"><Link to={`/projects/${id}`}>{name}</Link></h3>
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
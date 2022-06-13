import React from "react";
import { catLabels, techLabels } from '../projectsFeatures';
import {
    Routes,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import { Project } from "../../Project/Project";

export const ProjectTile = ({project}) =>{
    const {id, name, description, tileImage, images, tech, cat} = project;

    // const clickTile = () => {
    //     // Link to Project component with Route
    // }

    return ( 

            <article className="projectTile">
                <Link to={`/projects/${id}`}>Link</Link>
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
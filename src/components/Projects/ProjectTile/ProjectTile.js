import React from "react";

export const ProjectTile = ({project}) =>{
    const {name, description, img} = project;
    
    return ( 
        <div className="projectTile">
            <h3>{name}</h3>
            <p>{description}</p>

        </div>
    )
}
import React from "react";

export const ProjectTile = ({project}) =>{
    const {title, description, img} = project;
    
    return ( 
        <div className="projectTile">
            <h3>{title}</h3>
            <p>{description}</p>

        </div>
    )
}
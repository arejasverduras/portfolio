import React from "react";
import { ProjectTile } from "../ProjectTile/ProjectTile";

export const ProjectList = (props) => {
    // state gets updated by search, with 'available' projects.
    const projectsArray = [{
            title: "title 1",
            description: "description 1",
            img: ""
        },
        {
            title: "title 2",
            description: "description 2",
            img: ""
        },
        {
        title: "title 3",
        description: "hallo 3",
        img: ""
    }]

    return (
        <div className="projectList">
            {/* generate a ProjectTile
             for each item from the project state (list of objects) */}
             {projectsArray.map(project => 
                <ProjectTile 
                    project={project}
                />
                )}
        </div>
    )
}
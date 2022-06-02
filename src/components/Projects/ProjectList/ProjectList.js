import React from "react";
import { ProjectTile } from "../ProjectTile/ProjectTile";

export const ProjectList = ({projects}) => {
    // passed projects prop gets updated by search, with 'available' projects.
    //project is an array of objects 
    /*
     projects: [
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

    return (
        <div className="projectList">
            {/* generate a ProjectTile
             for each item from the project state (list of objects) */}
             {projects.map((project, index) => 
                <ProjectTile 
                    project={project} key={index}
                />
                )}
        </div>
    )
}
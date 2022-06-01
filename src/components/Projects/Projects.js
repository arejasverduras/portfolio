import React from 'react';
import { ProjectsSlider } from './ProjectsSlider/ProjectsSlider';

export const Projects = (props) => {
    return (
        <>
            <h1>Projects</h1>
            <ProjectsSlider />
            {/* scroll down button (optional) */}
            {/* <ProjectsFilter />  / <ProjectSearch /> */}
            {/* <ProjectList /> ==> Renders ProjectTiles */}
        </>
    )
}
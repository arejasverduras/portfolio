import React from 'react';
import { ProjectsSlider } from './ProjectSlider/ProjectSlider';
import { ProjectList } from './ProjectList/ProjectList';

export const Projects = (props) => {
    return (
        <>
            <h1>Projects</h1>
            <ProjectsSlider />
            {/* scroll down button (optional) */}
            {/* <ProjectsFilter />  / <ProjectSearch /> */}
            <ProjectList />
        </>
    )
}
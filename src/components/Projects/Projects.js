import React from 'react';
import { ProjectsSlider } from './ProjectSlider/ProjectSlider';
import { ProjectList } from './ProjectList/ProjectList';
import {useSelector} from 'react-redux';
import { selectProjects } from './ProjectsSlice';

export const Projects = (props) => {
    
    //selectProjects here from store, to be able to filter them 
    // later with the local search /filter options
    const projects = useSelector(selectProjects);
    // local filter / search options wll filter 'projects' and 
    // return this 'filteredProjects' tot the 'ProjectList'
    const filteredProjects = projects;
    
    return (
        <div className="Projects">
            <h1 className='ProjectsH1'>Projects</h1>
            <ProjectsSlider projects={filteredProjects} />
            {/* scroll down button (optional) */}
            {/* <ProjectsFilter />  / <ProjectSearch /> */}
            <ProjectList projects={filteredProjects} />
        </div>
    )
}
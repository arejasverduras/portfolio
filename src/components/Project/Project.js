import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';

export const Project = () =>{
    let params = useParams();
    let projectId = params.projectId;


    const projects = useSelector(selectProjects);

    let currentProject = projects.filter(project => project.id === projectId);
    console.log(currentProject);

    return (
        <>
        <p>{currentProject}</p>
       <h2>{params.projectId}</h2>
        
        </>
    )
}
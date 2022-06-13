import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';

export const Project = () =>{
    const params = useParams();
    let id = Number(params.projectId);
    console.log(`id = ${id}`);


    const allProjects = useSelector(selectProjects);
    // const projct = projects.find((pr) =>  pr.id === projectId);
    const filteredProject = allProjects.filter(pr => 
        pr.id === id
    );
    console.log(filteredProject);
    const project = filteredProject[0];
    console.log(project);
    

    return (
        <>
        <h1>{project.name}</h1>
        <img src={process.env.PUBLIC_URL + project.tileImage}></img>
       <h2>{params.projectId}</h2>
        
        </>
    )
}
import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';
import { Link, Navigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

export const Project = () =>{
    const params = useParams();
    let id = Number(params.projectId);
    console.log(`id = ${id}`);

    const [currentProject, setCurrentProject] = useState(id);


    const allProjects = useSelector(selectProjects);
    // const projct = projects.find((pr) =>  pr.id === projectId);
    const filteredProject = allProjects.filter(pr => 
        pr.id === id
    );
    console.log(filteredProject);
    const project = filteredProject[0];
    console.log(project);
    
    const nextProject = ()=>{
        if (currentProject !== allProjects.length) {
            setCurrentProject(id+1);
            console.log('id: '+ currentProject.id);
            
        } else {
            setCurrentProject(1)
        }
        let link = `/projects/${currentProject.id}`;
        return link
        
    }

    return (
        <>
        <article className='ProjectContainer'>
            <h1>{project.name}</h1>
            <img src={process.env.PUBLIC_URL + project.tileImage} alt="screenshot of project"></img>
            <h2>{params.projectId}</h2>
        </article>
        <Link to={`/projects/${
            id !== 1 ? id-1 : allProjects.length
            }`}><button>Previous project</button>
        </Link>
        <Link to={`/projects/${
            id !== allProjects.length ? id+1 : 1
            }`}><button>Next project</button>
        </Link>
        </>
    )
}
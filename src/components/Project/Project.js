import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';
import { Link } from 'react-router-dom';

export const Project = () =>{
    const params = useParams();
    let id = Number(params.projectId);
    console.log(`id = ${id}`);

    const [currentProject, setCurrentProject] = useState(id);


    const allProjects = useSelector(selectProjects);
    const filteredProject = allProjects.filter(pr => 
        pr.id === currentProject
    );
    // console.log(filteredProject);
    const project = filteredProject[0];

    useEffect(()=>{
        setCurrentProject(id);
    },[id])

    return (
        <>
        <article className='ProjectContainer'>
            <h1>{project.name}</h1>
            <img src={process.env.PUBLIC_URL + project.tileImage} alt="screenshot of project"></img>
            <h2>{params.projectId}</h2>
        </article>
        <Link to={`/projects/${
            currentProject !== 1 ? currentProject-1 : allProjects.length
            }`}><button>Previous project</button>
        </Link>
        <Link to={`/projects/${
            currentProject !== allProjects.length ? currentProject+1 : 1
            }`}><button>Next project</button>
        </Link>
        </>
    )
}
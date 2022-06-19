import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';
import { Link } from 'react-router-dom';
import { catLabels, techLabels } from '../Projects/projectsFeatures';

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



    const {name, client, description, tileImage, images, tech, cat, type, demoLink, sourceLink } = project;

    useEffect(()=>{
        setCurrentProject(id);
    },[id])

    return (
        <>
        <article className='ProjectContainer'>
            <h1>{name} || {client}</h1>
            <img src={process.env.PUBLIC_URL + tileImage} alt="screenshot of project"></img>
            <div className="projectContent">
                    <p className={catLabels(cat)}>{cat}</p>
                    <ul className="projectTileTech">
                         {tech.map((tech, index) => (
                            <li key={index} className={techLabels(tech)}>{tech}</li>
                        ))}
                    </ul>
                    <ul className="projectLinks">
                        <li><a href={demoLink} target="blank">Live Demo</a></li>
                        <li><a href={sourceLink} target="blank">View Source on GitHub</a></li>
                    </ul>
                    <p className="projectDescription">{description}</p>

           
            </div>

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